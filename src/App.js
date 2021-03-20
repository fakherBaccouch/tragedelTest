import React from 'react';
import   './stylings/homePageStyle.scss';
import   './stylings/css.scss';
import   './stylings/test.css';
import 'semantic-ui-css/semantic.min.css'

import   './stylings/nos_projet_home.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Apropos from "./components/apropos"
import Navbar_links from "./components/navbar_links"
import Navbar from "./components/navbar"
import Heading from "./components/header"
import Counters from "./components/counters"
import Services from "./components/services"


function App() {
  return (
    <div className='myApp'>
      <Navbar/>
      <Navbar_links/>
    <Heading/>
    <Services/>

    <Counters/>
    <Apropos/>


    </div>
  );
}

export default App;
