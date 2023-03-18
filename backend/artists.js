const {faker} = require('@faker-js/faker');
// https://www.npmjs.com/package/@faker-js/faker

const makeArtist = (id) => ({
  id: id,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  sex: faker.name.sex(),
  genre: faker.music.genre(),
  city: faker.address.city(),
  birthday: faker.date.birthdate()
});


const ARTISTS = {};
let id = 0;
for (id = 0; id < 10; id += 1) {
  ARTISTS[id] = makeArtist(id);
}

const getId = () => {
  id++;
  return id;
};

module.exports = {
  ARTISTS,
  getId
};