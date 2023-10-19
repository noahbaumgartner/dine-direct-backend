const express = require("express");
const router = express.Router();

const ModifierGroupService = require("../services/modifierGroupService");
const ModifierService = require("../services/modifierService");

router
    .get("/", (request, response) => {
        ModifierGroupService.getAll()
            .then((records) => {
                response.json(records);
            })
            .catch((error) => {
                console.error("Error occurred: ", error);
                response.status(500).send();
            });
    })
    .get("/:id", (request, response) => {
        ModifierGroupService.get(request.params.id)
            .then((records) => {
                response.json(records);
            })
            .catch((error) => {
                console.error("Error occurred: ", error);
                response.status(500).send();
            });
    })
    .post("/", (request, response) => {
        const { name } = request.body;
        ModifierGroupService.create(name)
            .then((record) => {
                response.status(201).json({
                    message: "Record created successfully",
                    record: record,
                });
            })
            .catch((error) => {
                console.error("Error occurred: ", error);
                response.status(500).send();
            });
    })
    .put("/:id", (request, response) => {
        const { name } = request.body;
        ModifierGroupService.update(request.params.id, name)
            .then((record) => {
                response.status(201).json({
                    message: "Record updated successfully",
                    record: record,
                });
            })
            .catch((error) => {
                console.error("Error occurred: ", error);
                response.status(500).send();
            });
    })
    .delete("/:id", (request, response) => {
        ModifierGroupService.delete(request.params.id)
            .then((record) => {
                response.status(201).json({
                    message: "Record deleted successfully",
                    record: record,
                });
            })
            .catch((error) => {
                console.error("Error occurred: ", error);
                response.status(500).send();
            });
    })
    .get("/:id/modifiers", (request, response) => {
        ModifierService.getAllForModifierGroup(request.params.id)
            .then((records) => {
                response.json(records);
            })
            .catch((error) => {
                console.error("Error occurred: ", error);
                response.status(500).send();
            });
    })
    .post("/:id/modifiers", (request, response) => {
        const { name, priceDiff } = request.body;
        ModifierService.create(name, priceDiff, request.params.id)
            .then((record) => {
                response.status(201).json({
                    message: "Record created successfully",
                    record: record,
                });
            })
            .catch((error) => {
                console.error("Error occurred: ", error);
                response.status(500).send();
            });
    })
    .delete("/:id/modifiers/:modifierId", (request, response) => {
        ModifierService.delete(request.params.modifierId)
            .then((record) => {
                response.status(201).json({
                    message: "Record deleted successfully",
                    record: record,
                });
            })
            .catch((error) => {
                console.error("Error occurred: ", error);
                response.status(500).send();
            });
    })

module.exports = router;
