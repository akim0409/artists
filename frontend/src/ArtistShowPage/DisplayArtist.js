const DisplayArtist = (props) => {
  const {artist} = props;
  
 return (
  <div className="border border-blue-400">
      <div className="flex">
        <div className="mx-2">firstName</div>
        <div>{artist.firstName}</div>
      </div>
      <div className="flex">
        <div className="mx-2">lastName</div>
        <div>{artist.lastName}</div>
      </div>
      
      <div className="flex">
        <div className="mx-2">sex</div>
        <div>{artist.sex}</div>
      </div>

      <div className="flex">
        <div className="mx-2">genre</div>
        <div>{artist.genre}</div>
      </div>

      <div className="flex">
        <div className="mx-2">city</div>
        <div>{artist.city}</div>
      </div>
      <div className="flex">
        <div className="mx-2">birthday</div>
        <div>{artist.birthday}</div>
      </div>
    </div>
 )
};

export default DisplayArtist;