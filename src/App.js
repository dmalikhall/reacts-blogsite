import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from '../src/pages/Home';
import Architecture from '../src/pages/Architecture';
import Design from '../src/pages/Design';
import Urbanism from '../src/pages/Urbanism';
import Ecobuilding from '../src/pages/Ecobuilding';
import AllPost from '../src/pages/AllPost';
import SingleBlog from '../src/pages/SingleBlog';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/architecture" element={<Architecture/>}/>
        <Route path='/architecture/:blogId' element={<SingleBlog/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path='/design/:blogId' element={<SingleBlog/>}/>
        <Route path="/urbanism" element={<Urbanism/>}/>
        <Route path='/urbanism/:blogId' element={<SingleBlog/>}/>
        <Route path="/ecobuilding" element={<Ecobuilding/>}/>
        <Route path='/ecobuilding/:blogId' element={<SingleBlog/>}/>
        <Route path="/all-post" element={<AllPost/>}/>
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;
