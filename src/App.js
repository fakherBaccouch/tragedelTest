import React from 'react';
import   './stylings/homePageStyle.scss';
import   './stylings/css.scss';
import   './stylings/nos_projet_home.scss';


import Header from './components/header'
import About from './components/about'
import Apropos from "./components/apropos"
import Nosprojethome from "./components/Nosprojethome"

import SectionTours from "./components/section_tours"

function App() {
  return (
    <div className='myApp'>
     
     <Header/>
    <Apropos/>
    <Nosprojethome/>
    </div>
  );
}

export default App;
