const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){
    this.stations = {greenPath: [],
    cityofTears: [],
    ancientBasin: []};

    this.registeredUsers = {};
  }

  registerUser(username, password, age){
    for (check in Object.keys(this.registeredUsers)){
      if(check === username){
        throw new Error("this username is taken");
      }
      else if(age < 18){
        throw new Error("too young to register");
      }
      else{
        const newUser = new User(username, password, age);
        this.registeredUsers[username.replace(/\s/g,'')] = newUser;
        //console.log(this.registeredUsers);
        return newUser;}}
  }
  loginUser(username,password){
    let correctUsername = false;
    for (check in Object.keys(this.registeredUsers)){
      if(check === username){
        username.login(password);
        correctUsername = true;
        console.log('logged in');
      }
    }
    if (correctUsername === false){
      throw new Error("wrong username or password");
    }
  }
  logoutUser(username){
    let correctUsername = false;
    for (check in Object.keys(this.registeredUsers)){
      if(check === username){
        username.logout();
        correctUsername = true;
        console.log('user is logged out');
      }
    }
    if (correctUsername === false){
      throw new Error("this user has not been logged in");
    }
  }
  createStation(station){
    this.stations.push(station);
    return station;
  }
  newScooter(station){
    let correctStation = false;
    for (check in Object.keys(this.stations)){
      if(check === station){
        correctStation = true;
        const newScooter = new Scooter(station, null, 100, false);
        newScooter.nextserial = newScooter;
        this.stations[station].push(newScooter.nextserial);
        console.log(this.station);
        return newScooter.nextserial;
      }
    }
    if (correctStation === false){
      throw new Error("there is no such station");
    }
  }
  dockScooter(scooter, station){
    let correctStation = false;
    for (check in Object.keys(this.stations)){
      if(check === station || station.includes(scooter) === false){
        correctStation = true;
        this.stations[station].push(scooter);
        console.log(this.station);
        return newStation;
      }
    }
    if (correctStation === false){
      throw new Error("scooter is already docked or there is no station");
    }
  }
  rentScooter(scooter,user){
    if (scooter.user === null){
      index = this.station.indexOf(scooter.station);
      this.stations[scooter.station].splice(index,1);
    }
    else{throw new Error("scooter has already been rented");}
  }

}

module.exports = ScooterApp
                  