import React, { Component } from 'react'
import '../stylings/navbar.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
class Navbar_links extends Component {

  render (){


    return (

<div className="navbar_links">
<ul>
    <li><a href="#">Acceuil</a ></li>
    <li><a href="#">Présentation de TRAGEDEL</a ></li>
    <li style={{display:'flex',alignItems:"center",cursor:"pointer"}}> <ArrowDropDownIcon/><a href="#"> Nos Services</a ></li>
    <li><a href="#">Notre Procédure</a ></li>
    <li><a href="#">Nos Projets</a ></li>
    <li><a href="#">Nouveauté</a></li>
    <li><a href="#">Contactez-nous</a ></li>


</ul>
</div>

    )
  }

}
 export default Navbar_links