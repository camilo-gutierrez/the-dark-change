import { Routes, Route } from "react-router-dom";
import './sass/index.scss'

import Bios from "./components/objects/pages/bios/Bios";
import Information from "./components/objects/pages/information/Information";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Bios /> } />
      <Route path="/hero/:id" element={ <Information /> } /> 
    </Routes>
  );
}

export default App;
