
import "./App.scss";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/Home';
import Skills from './containers/Skills';
import Contact from './containers/Contact';
import About from './containers/About';
import Navbar from './compontants/Navbar';



function App() {

  const location = useLocation();
  console.log(location);





  return (
    <div className='App'>
      {/* js paraticials here */}




      {/* navbare page here  */}
      <Navbar />

      {/* page header contnet here  */}

      {/* Routes  here */}
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>


    </div>
  )
}

export default App
