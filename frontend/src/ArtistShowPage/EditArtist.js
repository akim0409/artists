import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const EditArtist = (props) => {
  const {artist} = props;
  const [firstName, setFirstName] = useState(artist.firstName);
  const [lastName, setLastName] = useState(artist.lastName);
  const [sex, setSex] = useState(artist.sex);
  const [genre, setGenre] = useState(artist.genre);
  const [city, setCity] = useState(artist.city);
  const [birthday, setBirthday] = useState(artist.birthday);
  const navigate = useNavigate();
 console.log(artist);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/artists/${artist.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: artist.id, firstName, lastName, sex, genre, city, birthday}),
    })
    .then(() => {
      navigate('/artists');
    });
  }

  return (
    <div>
    <form
      className='border border-rose-400'
      onSubmit={handleSubmit}
    >
      <div>
        <input
          className='rounded-md border boder-black'
          placeholder='firstname'
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          className='rounded-md border boder-black'
          placeholder='lastname'
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className='rounded-md border boder-black' 
          placeholder='sex'
          value={sex}
          onChange={(e) => {
            setSex(e.target.value);
          }}
        />
        <input 
          className='rounded-md border boder-black'
          placeholder='genre'
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
      </div>
      <div>
      <input 
          className='rounded-md border boder-black'
          placeholder='city'
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input 
          className='rounded-md border boder-black'
          placeholder='birthday'
          value={birthday}
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />
      </div>
      <button
        className='rounded-md bg-blue-300 text-white px-4 py-1'
        type="submit"
      >Update Artist</button>
    </form>
  </div>
  )
};

export default EditArtist;