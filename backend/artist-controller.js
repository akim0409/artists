const { ARTISTS, getId } = require("./artists");

const getArtists =  (req, res) => {
  console.log(ARTISTS);
  const artists = [];
  for (let k in ARTISTS) {
    artists.push(ARTISTS[k]);
  }
  res.status(200).json(artists);
};

const createArtist = (req, res) => {
  const newId = getId();
  ARTISTS[newId] = {id: newId, ...req.body};
  res.status(201).json({ message: 'Artist created'});
};

const getArtistById = (req, res) => {
  const id = req.params.artistId;
  if (ARTISTS[id]) {
    res.status(200).json(ARTISTS[id]);
  } else {
    res.status(404).json({ message: 'Artist not found'});
  }
};

const updateArtist = (req, res) => {
  const id = req.params.artistId;
  if (ARTISTS[id]) {
    ARTISTS[id] = req.body;
    res.status(200).json(ARTISTS[id]);
  } else {
    res.status(404).json({ message: 'Artist not found'});
  }
};


const deleteArtist = (req, res) => {
  if (ARTISTS[req.params.artistId]) {
   delete ARTISTS[req.params.artistId];
   res.status(200).json({ message: 'Artist deleted'});
  } else {
   res.status(404).json({ message: 'Artist not found'});
  }
 };

module.exports = {
  getArtists,
  createArtist,
  getArtistById,
  updateArtist,
  deleteArtist
};

