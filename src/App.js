import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Navbar_links from "./components/nav/navbar_links"
import Navbar from "./components/nav/navbar"
import Homepage from "./pages/homepage"
import  './stylings/homePageStyle.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    <div className='myApp'>
      <Navbar_links/>
      <Homepage/>

    </div>
  );
}

export default App;
