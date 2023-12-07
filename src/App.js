import './App.css';
import puffin from './assets/puffin1.jpg';
import {galleryData} from "./data";
/* Trying the Navbar, had to correct GeeksForGeeks tutorial on next line*/

/* NAVBAR IMPORTS HERE; Skip if not doing a navbar */
import Navbar from "./components/NavbarElements";
import {
    Routes,
    Route,
} from "react-router-dom";
/* ebb: Moved the BrowserRouter import to the main index.js */

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Projects from "./pages/projects";


function App() {
  return (
    <div className="App">
        {/* NAVBAR STUFF HERE (skip if not using) */ }
        {/*<Router>*/}
         <Navbar />
        <Routes>
                <Route index={true} element={<Home />}/>
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>

        {/* END NAVBAR HERE  */ }

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
