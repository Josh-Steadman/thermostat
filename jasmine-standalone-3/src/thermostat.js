'use strict';

class Thermostat {
  
  constructor() {
    this.temperature = 20;
    this.minTemp = 10
    this.maxTemp = 25
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18
    this.HIGH_ENERGY_USAGE_LIMIT = 25
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  increaseTemp() {
    if (this.isMaxTemp() === false) {
    this.temperature += 1
    }
  }

  decreaseTemp() {
    if (this.isMinimumTemp() === false) {
      this.temperature -= 1
    }
  }

  isMinimumTemp() {
   return this.temperature === this.minTemp
  }

  isMaxTemp() {
    return this.temperature === this.maxTemp
   }

  powerSavingModeOff() {
     this.maxTemp = 32
  }

  powerSavingModeOn() {
    this.maxTemp = 25
 }

  getMaxTemp() {
    return this.maxTemp
  }

  isPowerSavingModeOn(){
    if (this.getMaxTemp() === 25) {
      return true
    } else {
      return false
    }
  }

  resetTemp() {
    this.temperature = 20;
  }

  checkUsage() {
    if (this.getCurrentTemperature() <  this.MEDIUM_ENERGY_USAGE_LIMIT ) {
      return 'low-usage'
    } else if (this.getCurrentTemperature() <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }

}