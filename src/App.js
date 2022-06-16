import './App.css';
import Header from './components/Header/Header';
import Category from './components/Category/Category';
import Slider from './components/Slider/Slider';
import DelHot from './components/DealHot/DealHot';
import Poster from './components/Poster/Poster';
import PosterMobile from './components/Poster/PosterMobile';
import Digital from './components/Digital/Digital';
import Counpon from './components/Counpon/Counpon';
import CounponMobile from './components/Counpon/CounponMobile';
import Brand from './components/Brand/Brand';
import HightLight from './components/Hightlight/Hightlight';
import Trending from './components/Trending/Trending';
import CounponTrending from './components/Counpon/CounponTrending'
import CounponTrendingMobile from './components/Counpon/CounponTrendingMobile'
import Today from './components/Today/Today';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Category/>
      <Slider/>
      <DelHot/>
      <Poster/>
      <PosterMobile/>
      <Digital/>
      <Counpon/>
      <CounponMobile/>
      <Brand/>
      <HightLight/>
      <Trending/>
      <CounponTrending/>
      <CounponTrendingMobile/>
      <Today/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
