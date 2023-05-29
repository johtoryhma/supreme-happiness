const express = require("express");
const app = express();

app.use(express.json());

let users = [
  {
    id: 1,
    name: "kissa",
    role: "tank",
    joinDate: "20121116", //moment("20121116", "YYYYMMDD")
    avatar: {
      accessory: "shades",
      body: "chest",
      clothing: "tankTop",
      clothingColor: "black",
      eyebrows: "angry",
      eyes: "wink",
      facialHair: "mediumBeard",
      graphic: "vue",
      hair: "short",
      hairColor: "black",
      hat: "none",
      hatColor: "green",
      lashes: "true",
      lipColor: "purple",
      mask: "true",
      mouth: "open",
      skinTone: "brown",
    },
  },
  {
    id: 2,
    name: "koira",
    role: "healer",
    joinDate: "20150801", //moment("20150801", "YYYYMMDD")
    avatar: {
      accessory: "roundGlasses",
      body: "breasts",
      clothing: "vneck",
      clothingColor: "red",
      eyebrows: "leftLowered",
      eyes: "dizzy",
      facialHair: "none3",
      graphic: "react",
      hair: "short",
      hairColor: "black",
      hat: "none5",
      hatColor: "green",
      lashes: "true",
      lipColor: "purple",
      mask: "true",
      mouth: "open",
      skinTone: "brown",
    },
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World! :)</h1>");
});

app.get("/api/users", (request, response) => {
  response.json(users);
});

app.get("/api/users/:id", (request, response) => {
  const id = Number(request.params.id);
  const user = users.find((user) => user.id === id);
  response.json(user);
});

app.post("/api/users", (request, response) => {
  const maxId = users.length > 0 ? Math.max(...users.map((n) => n.id)) : 0;
  const body = request.body;
  console.log(body);

  if (!body.name || !body.role || !body.avatar) {
    return response.status(400).json({
      error: "name, role or avatar missing",
    });
  }

  const user = {
    id: maxId + 1,
    name: body.name,
    role: body.role,
    joinDate: new Date(),
    avatar: body.avatar,
  };

  users = users.concat(user);

  response.json(user);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
