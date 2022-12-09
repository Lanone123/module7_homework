function ElectricalAppliance(devicePower, deviceColor, deviceStatus){
  this.power = "devicePower";
  this.color = "deviceColor";
  this.status = function(deviceStatus){
    if (deviceStatus === 0) console.log ('прибор выключен');
  }
}
const lampStatus = +prompt('Lamp on' - 1, 'lamp off' - 0)
const laptopStatus = +prompt('Laptop on' - 1, 'laptop off' - 0)
const lamp = new ElectricalAppliance(150, "grey", lampStatus);
const laptop = new ElectricalAppliance(300, "whyte", laptopStatus);
console.log(lamp);
lamp.status(lampStatus);
console.log(laptop);
laptop.status(laptopStatus);

function sumPower(x,y){
  let a = x.power;
  let b = y.power;
  if (x.status == 0){
  a = 0;
  }
  if (y.status == 0){
    b=0;
  }
  return a+b;
}
console.log("суммарная мощность приборов")