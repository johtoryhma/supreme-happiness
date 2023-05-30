require("dotenv").config();
const moment = require("moment");
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/user");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World! :)</h1>");
});

app.get("/api/users", (request, response) => {
  User.find({}).then((users) => {
    response.json(users);
  });
});

/* app.get("/api/users/:id", (request, response) => {
  const id = Number(request.params.id);
  const user = users.find((user) => user.id === id);
  response.json(user);
}); */

app.post("/api/users", (request, response) => {
  const body = request.body;
  //console.log(body);

  if (!body.name || !body.role || !body.avatar) {
    return response.status(400).json({
      error: "name, role or avatar missing",
    });
  }

  const user = new User({
    name: body.name,
    role: body.role,
    joinDate: moment().toISOString(),
    avatar: body.avatar,
  });

  user.save().then((savedUser) => {
    response.json(savedUser);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
