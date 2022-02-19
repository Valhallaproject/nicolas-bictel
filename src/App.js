import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import './App.css';
import Groupomania from "./pages/Groupomania";
import Home from "./pages/Home";
import Ohmyfood from "./pages/Ohmyfood";
import Orinoco from "./pages/Orinoco";
import Spatial from "./pages/Spatial";
import Sunnyside from "./pages/Sunnyside";

function App() {

  return (
    <BrowserRouter>
    <AnimatePresence>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/spatial" element={<Spatial />}/>
      <Route path="/ohmyfood" element={<Ohmyfood />}/>
      <Route path="/sunnyside" element={<Sunnyside />}/>
      <Route path="/groupomania" element={<Groupomania />}/>
      <Route path="/orinoco" element={<Orinoco />}/>
    </Routes>
    </AnimatePresence>
  </BrowserRouter>
  );
}

export default App;
