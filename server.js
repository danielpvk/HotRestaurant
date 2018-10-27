var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations = [
    {
      tableNumber: 1,
      name: " ",
      phone: "",
      email: "" ,
      uniqueID: 100
    },
  ];

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

//apuntar a la lista de las reservaciones

app.get("/reserve/:reservations", function(req, res) {
  var reserve = req.params.reservations;

  console.log("reserve");
  console.log(reserve);
  console.log("Reservations");
  console.log(reservations);


  return res.json(reservations);
});



// Server Init
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });