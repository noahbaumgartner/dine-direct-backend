const Printer = require("../models/printer");

class PrinterService {
  async getAll() {
    return await Printer.findAll();
  }

  async get(id) {
    const printer = await Printer.findByPk(id);
    if (printer == null) throw new TypeError("id does not exist");

    return printer;
  }

  async create(name, usb, ip) {
    return await Printer.create({
      name: name,
      usb: usb,
      ip: ip,
    });
  }

  async update(id, name, usb, ip) {
    const printer = await this.get(id);
    printer.name = name;
    printer.usb = usb;
    printer.ip = ip;

    return await printer.save();
  }

  async delete(id) {
    const printer = await this.get(id);
    return await printer.destroy();
  }
}

module.exports = new PrinterService();
