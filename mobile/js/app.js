/**
 * Get the current device object
 */
function getDevice() {
  var device = new Appworks.AWDevice();
  var string = "";
  string += "Cordova: " + device.cordova + "<br/>";
  string += "Model: " + device.model + "<br/>";
  string += "Platform: " + device.platform + "<br/>";
  string += "Uuid: " + device.uuid + "<br/>";
  string += "Version: " + device.version + "<br/>";
  string += "Manufacturer: " + device.manufacturer;
  out(string);
}

function out(message) {
  console.log(message);
  if(typeof(message) == "object") {
    getObject("result").innerHTML = JSON.stringify(message);
  } else {
    getObject("result").innerHTML = message;
  }
}

function getObject(name) {
  return document.getElementById(name);
}
