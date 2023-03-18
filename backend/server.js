const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const artistController = require("./artist-controller");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/artists", artistController.getArtists);
app.post("/artists", artistController.createArtist);
app.get("/artists/:artistId", artistController.getArtistById);
app.put("/artists/:artistId", artistController.updateArtist);
app.delete("/artists/:artistId", artistController.deleteArtist);

app.listen(port, () => {
  console.log(`Artist app listening on port ${port}`);
});