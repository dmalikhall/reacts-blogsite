import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from '../src/pages/Home';
import Architecture from '../src/pages/Architecture';
import Design from '../src/pages/Design';
import Urbanism from '../src/pages/Urbanism';
import Ecobuilding from '../src/pages/Ecobuilding';
import AllPost from '../src/pages/AllPost';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/architecture" element={<Architecture/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/urbanism" element={<Urbanism/>}/>
        <Route path="/ecobuilding" element={<Ecobuilding/>}/>
        <Route path="/all-post" element={<AllPost/>}/>
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;
