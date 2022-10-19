const Thermostat = require('./thermostat');

describe( 'Thermostat class', () => {
  it( 'starts with initial temperature 20 degrees', () => {
    const thermo = new Thermostat();
    expect(thermo.getTemp()).toBe(20);
  });
});