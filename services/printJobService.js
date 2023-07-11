const PrintJob = require("../models/printJob");

class PrintJobService {
  async getAll() {
    return await PrintJob.findAll();
  }

  async get(id) {
    const printJob = await PrintJob.findByPk(id);
    if (printJob == null) throw new TypeError("id does not exist");

    return printJob;
  }

  async create(name, printTemplateId, printerId) {
    return await PrintJob.create({
      name: name,
      PrintTemplateId: printTemplateId,
      PrinterId: printerId,
    });
  }

  async update(id, name) {
    const printJob = await this.get(id);
    printJob.name = name;

    return await printJob.save();
  }

  async delete(id) {
    const printJob = await this.get(id);
    return await printJob.destroy();
  }
}

module.exports = new PrintJobService();
