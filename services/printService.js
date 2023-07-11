const Print = require("../models/print");

const escpos = require("escpos");
const PrintJobService = require("./printJobService");
const PrintTemplateService = require("./printTemplateService");
const PrinterService = require("./printerService");

escpos.Network = require("escpos-network");
escpos.USB = require("escpos-usb");

class PrintService {
  async getAll() {
    return await Print.findAll();
  }

  async print(printJobId) {
    const print = await Print.create({
      PrintJobId: printJobId,
    });

    const printJob = await PrintJobService.get(printJobId);
    const printTemplate = await PrintTemplateService.get(
      printJob.PrintTemplateId
    );
    const printer = await PrinterService.get(printJob.PrinterId);

    const deviceESC = printer.usb
      ? new escpos.USB()
      : new escpos.Network(printer.ip);
    const printerESC = new escpos.Printer(deviceESC);

    deviceESC.open((error) => {
      printerESC
        .font("a")
        .align("ct")
        .style("bu")
        .size(1, 1)
        .text("abcdefghijklmnopqrstufwxyz")
        .text("abcdefghijklmnopqrstufwxyz")
        .text("abcdefghijklmnopqrstufwxyz")
        .text("abcdefghijklmnopqrstufwxyz")
        .text("abcdefghijklmnopqrstufwxyz")
        .cut()
        .close();
    });

    return print;
  }
}

module.exports = new PrintService();
