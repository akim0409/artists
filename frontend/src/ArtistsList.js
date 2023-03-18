import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";


const ArtistsList = () => {
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();


  const fetchArtists = () => {
    fetch('http://localhost:3001/artists')
      .then(response => response.json())
      .then(data => setArtists(data));
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  console.table(artists);
  
  const artistItems = artists.map((artist, idx) => {
    return <div 
      key={idx}
      className="border border-black rounded-md p-3 m-2 cursor-pointer"
      onClick={() => {
        navigate(`/artists/${artist.id}`)
      }}
    >
      <div className='flex'>
        <div>{artist.firstName}</div>
        <div>{artist.lastName}</div>
      </div>
      <div>{artist.genre}</div>
    </div>
  });


  return (
    <div className="flex flex-wrap">
      {artistItems}
    </div>
  )
};

// get all the artists and display their firstname, lastname, genre

export default ArtistsList;