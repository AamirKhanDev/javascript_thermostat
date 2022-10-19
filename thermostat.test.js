const Thermostat = require('./thermostat');

describe( 'Thermostat class', () => {
  it( 'starts with initial temperature 20 degrees', () => {
    const thermo = new Thermostat();
    expect(thermo.getTemp()).toBe(20);
  });
});


it( 'Increases temperature to 22 when turning it up', () => {
  const thermo = new Thermostat()
  thermo.tempUp()
  thermo.tempUp()
  expect(thermo.tempUp()).toBe(22);
});

it( 'Decreases temperature to 18 when turning it down', () => {
  const thermo = new Thermostat()
  thermo.tempDown()
  thermo.tempDown()
  expect(thermo.tempDown()).toBe(18);
});

it( 'Maxes out temperature at 30', () => {
  const thermo = new Thermostat()
  Thermostat.max
  expect(thermo.tempMax()).toBe(30);
});

it( 'Will not go lower than 15C', () => {
  const thermo = new Thermostat()
  Thermostat.min
  expect(thermo.tempMin()).toBe(15);
});