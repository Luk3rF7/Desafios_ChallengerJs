// Only change code below this line
class Thermostat {
  constuctor(num) {
    this.temp = num;
  }
  get temperature() {
    return this.temp
  }

  set temperature(num) {
    return this.temp = num
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)