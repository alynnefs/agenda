/* módulos que usaremos */
var express = require("express");
var bodyParser = require("body-parser");
var knexfile = require("./knexfile");
var knex = require("knex")(knexfile.development);
var app = express();

knex.migrate.latest();
app.use(bodyParser.json());

var morgan = require('morgan');

app.use(morgan("dev","immediate"));

// rotas
app.use("/contatos", require('./routes/contatos')(knex));
app.use("/scripts", express.static(__dirname + '/node_modules/angular'));


app.use(express.static("public"));

app.listen(3000);
