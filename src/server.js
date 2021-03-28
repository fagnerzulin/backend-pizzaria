const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const cors = require("cors");

require("./database/index");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT_LISTEN, () => {
  console.log(`Listen on port ${process.env.PORT_LISTEN}`);
});
