import React, { Component } from 'react'
import '../stylings/navbar.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
class Navbar extends Component {

  render (){


    return (

<div className="navbar">
<div style={{display:"flex",alignItems:"center",width:"100%"}}>
<div className="navbar_brand"> 

<img style={{width:"70%"}} src={require('../images/logo.png')} />


 </div>
<div className="navbar_items">

<div className="navbar_items_list" ><div><ContactPhoneIcon style={{fontSize:"40px"}}/></div><div><ul><li><h3>Phone Number</h3></li><li><p>23020527</p></li></ul></div></div>
<div className="navbar_items_list" ><div><LocationOnIcon style={{fontSize:"40px"}}/></div><div><ul><li><h3>Contact Adresse</h3></li><li><p>12 rue zaghounae</p></li></ul></div></div>
<div className="navbar_items_list" ><div><MailOutlineIcon style={{fontSize:"40px"}}/></div><div><ul><li><h3>Email addresse</h3></li><li><p>bakouchfakher@gmail.com</p></li></ul></div></div>


</div>
</div>
</div>

    )
  }

}
 export default Navbar