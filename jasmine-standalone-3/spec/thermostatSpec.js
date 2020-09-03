describe('Thermostat', function(){
  
  var thermostat; 

  beforeEach(function() {
    thermostat = new Thermostat();
  })
it('starts at a temperature of 20 degrees', function() {
  expect(thermostat.getCurrentTemperature()).toEqual(20)
})

it('has a minimum temperature of 10 degrees', function(){
  for(var i=0; i < 11; i++) {
    thermostat.decreaseTemp()
  }
  expect(thermostat.getCurrentTemperature()).toEqual(10)
})

it('has a maximum temperature of 25 degrees when power saving move is on', function(){
  for(var i=0; i < 6; i++) {
    thermostat.increaseTemp()
  }
  expect(thermostat.getCurrentTemperature()).toEqual(25)
})

it('has a maximum temperature of 32 degrees when power saving mode is off', function(){
  thermostat.powerSavingModeOff()
  for(var i=0; i < 13; i++) {
    thermostat.increaseTemp()
  }
  expect(thermostat.getCurrentTemperature()).toEqual(32)
})

it('can increase temperature', function(){
  thermostat.increaseTemp()
  expect(thermostat.getCurrentTemperature()).toEqual(21)
})

it('can decrease temperature', function(){
    thermostat.decreaseTemp()
  expect(thermostat.getCurrentTemperature()).toEqual(19)
})

it('can reset the temperature to 20', function() {
  thermostat.resetTemp()
  expect(thermostat.getCurrentTemperature()).toEqual(20)
})

describe('energy usage', function(){
  it('is low-usage', function(){
    for(var i = 0; i < 3; i++) {
      thermostat.decreaseTemp()
    }
    expect(thermostat.checkUsage()).toEqual('low-usage')
  })

  it('is medium-usage', function(){
    expect(thermostat.checkUsage()).toEqual('medium-usage')
  })

  it('is high-usage', function(){
    thermostat.powerSavingModeOff()
    for(var i=0; i < 10; i++) {
      thermostat.increaseTemp()
    }
    expect(thermostat.checkUsage()).toEqual('high-usage')
  })
})

describe('powerSavingMode', function() {
  it('changes max temperature to 25 degree if power saving is on', function(){
    expect(thermostat.getMaxTemp()).toEqual(25)
  })
  it('changes max temperature to 32 degree if power saving is off', function(){
    thermostat.powerSavingModeOff()
    expect(thermostat.getMaxTemp()).toEqual(32)
  })
   
  it('checks if power saving mode is on', function(){
    expect(thermostat.isPowerSavingModeOn()).toEqual(true)
  })

  it('checks if power saving mode is off', function(){
    thermostat.powerSavingModeOff()
    expect(thermostat.isPowerSavingModeOn()).toEqual(false)
  })
})

})
