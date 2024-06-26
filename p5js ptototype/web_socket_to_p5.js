// where the serial server is (your local machine):

var host = '192.168.20.208';

var socket; // the websocket

var sensorValue = 0; // the sensor value



function setup() {

  createCanvas(400, 400);

  // connect to server:

  socket = new WebSocket('ws://' + host);

  // socket connection listener:

  socket.onopen = sendIntro;

  // socket message listener:

  socket.onmessage = readMessage;

}



function draw() {

  background("pink");

  fill(255);

  ellipse(sensorValue, height / 2, 20, 20);

  text(sensorValue, 20, 20);
}



function sendIntro() {

  // convert the message object to a string and send it:

  socket.send("Hello");

}



function readMessage(event) {

  var msg = event.data; // read data from the onmessage event

  sensorValue = Number(msg);

  println(sensorValue); // print it

}

