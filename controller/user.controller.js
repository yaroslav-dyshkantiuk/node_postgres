class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body;
    console.log(name, surname);
    res.json('ok');
  }

  async getUsers(req, res) {}

  async getOneUsers(req, res) {}

  async updateUser(req, res) {}

  async deleteUsers(req, res) {}
}

module.exports = new UserController();
