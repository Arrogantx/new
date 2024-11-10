import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import Media from './pages/Media/Media';
import Locations from './pages/Locations/Locations';
import Events from './pages/Events/Events';
import Shop from './pages/Shop/Shop';
import SuperHentai from './pages/SuperHentai/SuperHentai';
import MegaZ from './pages/MegaZ/MegaZ';
import Contact from './pages/Contact/Contact';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Tutorials from './pages/Tutorials/Tutorials';
import VideoSec from './pages/MediaVideos/VideoSec';
import MediaPictures from './pages/MediaPictures/MediaPictures';
import Hentai from './pages/Hentai/Hentai';
import Collections from './pages/Collections/Collections';
import { CartProvider } from './CartContext';
import NFTs from './pages/NFTs/NFTs';
import NFtsRoboto from './pages/NFtsRoboto/NFtsRoboto';
import Minting from './pages/Minting/Minting';


function App() {
  return (
    <CartProvider>
           <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='media' element={<Media />} />
        <Route path='locations' element={<Locations />} />
        <Route path='events' element={<Events />} />
        <Route path='series' element={<Shop />} />
        <Route path='super-hentai' element={<SuperHentai />} />
        <Route path='mega-z' element={<MegaZ />} />
        <Route path='contact' element={<Contact />} />
        <Route path='carousel' element={<ImageCarousel />} />
        <Route path='tutorial' element={<Tutorials />} />
        <Route path='media-video' element={<VideoSec />} />
        <Route path='media-picture' element={<MediaPictures />} />
        <Route path='hentai' element={<Hentai />} />
        <Route path='collections' element={<Collections />} />
        <Route path='nfts' element={<NFTs />} />
        <Route path='nfts-roboto' element={<NFtsRoboto />} />
        <Route path='minting' element={<Minting />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  
  );
}

export default App;
