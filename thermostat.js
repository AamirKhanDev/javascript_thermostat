
class Thermostat {

  constructor() {

    Thermostat.max = 30
    Thermostat.min = 15
    Thermostat.resetTemp = 20

    this.temp = Thermostat.resetTemp;
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

  tempMax() {
  return Thermostat.max
  }

  tempMin () {
  return Thermostat.min

  }

}

module.exports = Thermostat;