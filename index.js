require("dotenv").config();

const server = require("./api/server.js");

const PORT = process.env.PORT || 9000;

server.listen(9000, () => {
  console.log(`running at port ${PORT}`);
});
