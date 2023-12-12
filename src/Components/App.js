
import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

import '../Styles/navLinkbar.css'

import Encabezado from "./Encabezado";
import Footer from "./Footer";

import Home from "./clases/home";
import Clase1 from "./clases/clase1";
import Clase2 from "./clases/clase2";
import Clase3 from "./clases/clase3";
import Clase4 from "./clases/clase4";
import Clase5 from "./clases/clase5";
import Clase6 from "./clases/clase6";
import Clase7 from "./clases//clase7";
import Integral from "./clases/Integral";

const App = () => (
  <BrowserRouter>
    <div>
      <Encabezado />
      <div className="nav-links_peque">
        <NavLink className={'nav-link-pe'} to="/clase1" activeClassName="active" >C1</NavLink >
        <NavLink className={'nav-link-pe'} to="/clase2" activeClassName="active" >C2</NavLink>
        <NavLink className={'nav-link-pe'} to="/clase3" activeClassName="active" >C3</NavLink>
        <NavLink className={'nav-link-pe'} to="/clase4" activeClassName="active" >C4</NavLink>
        <NavLink className={'nav-link-pe'} to="/clase5" activeClassName="active" >C5</NavLink>
        <NavLink className={'nav-link-pe'} to="/clase6" activeClassName="active" >C6</NavLink>
        <NavLink className={'nav-link-pe'} to="/clase7" activeClassName="active" >C7</NavLink>
        <NavLink className={'nav-link-pe'} to="/integral" activeClassName="active" >Integral</NavLink>
        <NavLink className={'nav-link-pe'} to="/">Home</NavLink>
      </div>

      <div className="nav-links">
        <NavLink className={'nav-link_link'} to="/clase1" activeClassName="active" >Clase1</NavLink >
        <NavLink className={'nav-link_link'} to="/clase2" activeClassName="active" >Clase2</NavLink>
        <NavLink className={'nav-link_link'} to="/clase3" activeClassName="active" >Clase3</NavLink>
        <NavLink className={'nav-link_link'} to="/clase4" activeClassName="active" >Clase4</NavLink>
        <NavLink className={'nav-link_link'} to="/clase5" activeClassName="active" >Clase5</NavLink>
        <NavLink className={'nav-link_link'} to="/clase6" activeClassName="active" >Clase6</NavLink>
        <NavLink className={'nav-link_link'} to="/clase7" activeClassName="active" >Clase7</NavLink>
        <NavLink className={'nav-link_link'} to="/integral" activeClassName="active" >Integral</NavLink>
        <NavLink className={'nav-link_link'} to="/">Home</NavLink>
      </div>

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/clase1" element={<Clase1/>} />
        <Route path="/clase2" element={<Clase2/>} />
        <Route path="/clase3" element={<Clase3/>} />
        <Route path="/clase4" element={<Clase4/>} />
        <Route path="/clase5" element={<Clase5/>} />
        <Route path="/clase6" element={<Clase6/>} />
        <Route path="/clase7" element={<Clase7/>} />
        <Route path="/integral" element={<Integral/>} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
export default App;
