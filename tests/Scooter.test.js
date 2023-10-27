const Scooter = require('../src/Scooter')
const User = require('../src/User')

const scooter = new Scooter('greenPath', 'Un', 80, false);
const scooter2 = new Scooter('CityOfTears', 'ghost', 19, false);
const scooter3 = new Scooter('greenPath', 'Mantis', 50, true);
const scooter4 = new Scooter('CityOfTears', 'dungDefender', 70, false);

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})


//Method tests
describe('scooter methods', () => {
  // tests here!
  //rent method
  scooter.rent('Fluke');
  test('rent test charge above 20%', () => {
    
    expect(scooter.user).toBe('Fluke');
  })
  test('rent test charge less than 20%', () => {
    expect(() =>scooter2.rent('Grub')).toThrow(Error("scooter needs to charge or scooter needs repair"));
  })
  //scooter3.rent('Grub');
  test('rent test broken = true', () => {
    expect(() => scooter3.rent('Grub')).toThrow(Error);
  })
  
  //dock method
  scooter4.dock();
  console.log(scooter4.station);
  test('return scooter to dock, user = null', () => {
    expect(scooter4.user).toBe(null);
  })
  test('return scooter to dock, station != null', () => {
    
    expect(scooter4.station).not.toBe(null);
  })
  //requestRepair method

  //charge method

})
