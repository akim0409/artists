import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewArtistPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');
  const [genre, setGenre] = useState('');
  const [city, setCity] = useState('');
  const [birthday, setBirthday] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(firstName) || !(lastName) || !(sex) || !(genre) || !(city) ||!(birthday)) {
      setErrorMessage('All fields need to be filled');
      return;
    }
    fetch("http://localhost:3001/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({firstName, lastName, sex, genre, city, birthday}),
    })
    .then(() => {
      setFirstName('');
      setLastName('');
      setSex('');
      setGenre('');
      setCity('');
      setBirthday('');
      setErrorMessage('');
      navigate('/artists/');
    });
  }
  
 return (
  <div>
    <form
      className='border border-rose-400'
      onSubmit={handleSubmit}
    >
      {errorMessage}
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
      >Create Artist</button>
    </form>
  </div>
 )
};

export default NewArtistPage;