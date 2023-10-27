const ScooterApp = require('../src/ScooterApp')

class Scooter{
  static nextSerial = 0;
  constructor(station, user, charge, isBroken){
    this.station = station;
    this.user = user;
    this.serial = this.nextSerial;
    this.nextSerial += 1;
    this.charge = charge;
    this.isBroken = isBroken;
  }

  rent(user){
    if ((this.charge > 20) && (this.isBroken === false)){
      this.user = user;
      this.station = null;
      console.log(this.user);
    }
    else{
      console.log('error should work');
      throw new Error("scooter needs to charge or scooter needs repair");
    }
  }
  dock(station){
      this.user = null;
      this.station = station;
  }
  recharge(){

  }
  requestRepair(){

  }
}


module.exports = Scooter
