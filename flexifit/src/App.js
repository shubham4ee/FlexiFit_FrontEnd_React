import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from 'react-router-dom';  // need this previous verions of router-domm

//pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

//Components
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
      <h1>welcome to react </h1>

      {/* older way of declering path. */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
