// play.js
const { setupInput } = require("./input");
const { connect } = require("./client");
console.log("Connecting ...");
connect();



// connect().on("Name:AKA", function(){

// });



setupInput(connect());
