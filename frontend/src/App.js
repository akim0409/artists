import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ArtistsList from './ArtistsList';
import ArtistShowPage from './ArtistShowPage';
import NewArtistPage from './NewArtistPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/artists" Component={ArtistsList}/>
        <Route path="/artists/:artistId" Component={ArtistShowPage} />
        <Route path="/artists/new" Component={NewArtistPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
