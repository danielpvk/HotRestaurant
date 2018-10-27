var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations = [
   
  ];

  var waitingList = [
   
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


  console.log("Reservations");
  console.log(reservations);
  


  return res.json(reservations);
});

app.get("reserve/espera/:waitingList", function(req, res) {
  var waiting = req.params.waitingList;

 
  console.log("Waiting List");
  console.log(waitingList);


  return res.json(waitingList);
});

app.post("/reserve", function (req, res){
  if (reservations.length<2){
    let newReservation = req.body;
    console.log(newReservation);
  
    reservations.push(newReservation);
    
    res.json(newReservation);

  
  }else{
    let newReservation = req.body;
    console.log(newReservation);
  
    waitingList.push(newReservation);
    
    res.json(false);
  }



});


// Server Init
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });