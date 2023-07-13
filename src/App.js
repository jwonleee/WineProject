import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './layout/Home';
import Layout from './layout/Layout';
import WhiteWineDetail from './JW/WhiteWineDetail';
import WhiteWineAPI from './JW/WhiteWineAPI';
import RedWineAPI from './SY/RedWineAPI';
import RedWineDetail from './SY/RedWineDetail';
import MapAPI from './SM/MapAPI';
import SearchBySemin from './SM/SearchBySemin';
import { SearchProvider } from './SM/ContextAPI';

function App() {
  return (
    <>
    <SearchProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route element={<Layout/>}>
            <Route path='/white' element={<WhiteWineAPI/>}/>
            <Route path='/red' element={<RedWineAPI/>}/>
            <Route path='/search' element={<SearchBySemin/>}/>
            <Route path='/whitedetail' element={<WhiteWineDetail/>}/>
            <Route path='/redDetail' element={<RedWineDetail/>}/>
          </Route>
        {/* <Route path='/map' element={<MapAPI/>}></Route> */}
      </Routes>
    </SearchProvider>
    </>
  );
}

export default App;
