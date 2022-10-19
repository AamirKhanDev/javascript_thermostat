
class Thermostat {

  constructor() {
    this.temp = 20;
  }

  getTemp() {
    return this.temp;
  }

  tempUp () {
    return this.temp++;
  }

  tempDown() {
    return this.temp--;
  }
}

module.exports = Thermostat;