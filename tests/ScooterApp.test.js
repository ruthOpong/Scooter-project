const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();

scooterApp.registerUser("cat", "veryOld", 80);
scooterApp.registerUser("repeat", "gain", 29);
scooterApp.registerUser("wrong", "user", 29);
scooterApp.registerUser("no space", "user", 29);

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });

  test("throw error if already registered + return user", () => {
    expect(() => scooterApp.registerUser("repeat", "gain", 29)).toThrow(Error('already registered'));
  })

  test("return error if too young", ()  => {
    expect(() => scooterApp.registerUser("pix", "fairy", 15)).toThrow(Error('too young to register'));
  })
});

// log in
scooterApp.loginUser("cat","veryOld");
describe("login tests", () => {
  test("correct username + password", () => {
    expect(cat.loggedIn).toBe(true);
  });
  test("incorrect username or password", () => {
    expect(wrong.loggedIn).toBe(false);
  });
  });

// log out

scooterApp.loginUser("nospace");
scooterApp.logoutUser("nospace");
describe("logout tests", () => {
  test("login user", () => {
    expect(nospace.loggedIn).toBe(false);    
  });
});

// rent scooter

describe("scooter new station location", () => {
  test("adds location to list", () => {
    expect(scooterApp.createStation('queens Gardens')).toReturn('queensGardens');
  })
});

console.log(Object.keys(scooterApp.stations) + 'cat');
let check = "";
for (property in  Object.keys(scooterApp.stations)){
  console.log(property in  Object.keys(scooterApp.stations));
  if (property === 'queensGardens'){
    check = true;
  }
}
scooterApp.newScooter('queensGardens');
describe("create scooter", () => {
  test("creates scooter + adds it to list", () => {
    expect(check).toBe(true);
  })
})

describe("rent scooter", () => {
  test("gives scooter to user", () => {

  })
  test("throws error if no scooter exists", () => {

  })
});

// dock scooter
describe("dock rent tests", () => {

});
