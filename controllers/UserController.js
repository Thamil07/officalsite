const users = [
  {
    id: 1,
    username: "veera",
    password: "123",
  },
  {
    id: 2,
    username: "cilamban",
    password: "sddd",
  },
  {
    id: 3,
    username: "s22",
    password: "po899",
  },
];
class UserController {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      console.log(req.body);
      console.log(username, password);
      for (const user of users) {
        if (user.username == username) {
          if (user.password == password) {
            return res.send({ user: user.id }, 200);
          } else {
            return res.sendStatus(401).send("Invalid password");
          }
        }
      }
      return res.sendStatus(400).send("Invalid username");
    } catch (err) {
      return res.sendStatus(500).send("Internal server error!");
    }
  }
  async logout(req, res) {
    return res.status(200).send("Logged out");
  }
}

module.exports = UserController;
