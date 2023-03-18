import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisplayArtist from "./DisplayArtist";
import EditArtist from "./EditArtist";

const ArtistShowPage = () => {
  const [artist, setArtist] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/artists/${params.artistId}`)
      .then((response) => response.json())
      .then((data) => setArtist(data));
  }, []);

  if (artist === null) {
    return null;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      {isEditing 
      ? <EditArtist artist={artist} />
      : <DisplayArtist artist={artist} />
      }
      <button
        onClick={() => {
          setIsEditing(true);
        }}
      >Edit</button>
      
    </div>
  );
};

export default ArtistShowPage;
