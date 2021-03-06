let express = require("express");
let app = express();
let bodyParser = require("body-parser");
const dataManip = require("./Routes/DataManip");
const neuron = require('./Routes/api/Neuron/data');
const euph = require("./Routes/api/Euphony/data");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("welcome to ridge-neuron");
});
//content access route
app.use("/api/data", neuron);
app.use("/api/euphony",euph);
// app.use("/api/transfer",dataTransfer)

app.listen(process.env.port || 5000)
