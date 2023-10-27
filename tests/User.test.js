const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);
const user2 = new User("Mae Bloggs", "test456", 70);
const user3 = new User("Freddy Fazbear", "screaming", 12);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  user.login('test123')
  test("password should = user.password", () => {
    expect(user.loggedIn).toBe(true);
  })

  test("wrong password", () =>{
    expect(() => user2.login('test123')).toThrow(Error("incorrect password"))
  })

  user3.logout()
  test('log out', () => {
    expect(user3.loggedIn).toBe(false);
  })
  // test age
})


// test login

// test logout
