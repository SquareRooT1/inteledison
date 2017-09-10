var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {

  // Plug the Rotary Angle sensor module
  // into the Grove Shield's A0 jack
  var rotary = new five.Sensor("A0");

  // Plug the Servo module
  // into the Grove Shield's D5 jack
  var servo = new five.Servo(5);
  var led = new five.Led(8);

  // Set scaling of the Rotary angle
  // sensor's output to 0-180° (8-bit)
  // range. Set the servo angle in
  // degrees corresponding to the
  // value of the sensor
  rotary.scale(0, 180).on("change", function() {
    if(this.value > 90){
       led.on();
    }else{
      led.off();
    }
    servo.to(this.value);
  });
});
