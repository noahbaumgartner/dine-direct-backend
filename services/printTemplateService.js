const PrintTemplate = require("../models/printTemplate");

class PrintTemplateService {
  async getAll() {
    return await PrintTemplate.findAll();
  }

  async get(id) {
    const printTemplate = await PrintTemplate.findByPk(id);
    if (printTemplate == null) throw new TypeError("id does not exist");

    return printTemplate;
  }

  async create(name) {
    return await PrintTemplate.create({
      name: name,
    });
  }

  async update(id, name) {
    const printTemplate = await this.get(id);
    printTemplate.name = name;

    return await printTemplate.save();
  }

  async delete(id) {
    const printTemplate = await this.get(id);
    return await printTemplate.destroy();
  }
}

module.exports = new PrintTemplateService();
