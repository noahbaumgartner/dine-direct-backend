const Space = require("../models/space");

class SpaceService {
  async getAll() {
    return await Space.findAll();
  }

  async get(id) {
    const space = await Space.findByPk(id);
    if (space == null) throw new TypeError("id does not exist");

    return space;
  }

  async create(name, plan) {
    return await Space.create({
      name: name,
      plan: plan,
    });
  }

  async update(id, name, plan) {
    const space = await this.get(id);
    space.name = name;
    space.plan = plan;

    return await space.save();
  }

  async updateSingle(id, name, plan) {
    const space = await this.get(id);
    if (name) space.name = name;
    if (plan) space.plan = plan;

    return await space.save();
  }

  async delete(id) {
    const space = await this.get(id);
    return await space.destroy();
  }
}

module.exports = new SpaceService();
