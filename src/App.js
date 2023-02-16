
import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FavouriteShows from './Components/FavouriteShows';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ShowDetails from './Components/ShowDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Box>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/show-details/:id' element={<ShowDetails/>}/>
          <Route path='/fav-shows' element={<FavouriteShows/>}/>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
