const ModifierGroupAssignment = require("../models/modifierGroupAssignment");

class ModifierGroupAssignmentService {
    async getAllForProduct(productId) {
        const modifierGroupAssignments = await ModifierGroupAssignment.findAll({
            where: {
                ProductId: productId,
            },
        });

        return modifierGroupAssignments;
    }

    async create(modifierGroupId, productId) {
        return await ModifierGroupAssignment.create({
            ModifierGroupId: modifierGroupId,
            ProductId: productId,
        });
    }

    async delete(modifierGroupId, productId) {
        return await ModifierGroupAssignment.destroy({
            where: {
                ModifierGroupId: modifierGroupId,
                ProductId: productId,
            },
        });
    }
}

module.exports = new ModifierGroupAssignmentService();
