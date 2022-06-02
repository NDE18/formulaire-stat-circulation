const express = require("express");
const path = require('path');
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

/*var corsOptions = {
  origin: "http://localhost:8080"
};*/

//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
 /*db.sequelize.sync({ force: true }).then(() => {
   console.log("Drop and re-sync db.");
 });*/

// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});*/

const __dossier = path.resolve()
app.use(express.static(path.join(__dossier, '/build')))

app.get('*', (req, res) => 
  res.sendFile(path.resolve(__dossier, 'build', 'index.html')))

require("./app/routes/pv.routes")(app);
require("./app/routes/infos.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
