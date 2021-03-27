import React, { Component } from 'react'
import style from './nav.module.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Navbar extends Component {

  render (){


    return (

<div className={style.navbar}>
<div style={{display:"flex",alignItems:"center",width:"100%"}}>

<div className={style.navbar_items}>

<div className={style.navbar_items_list} ><div><ContactPhoneIcon style={{fontSize:"40px"}}/></div><div><ul><li><h4>Phone Number</h4></li><li><p>23020527</p></li></ul></div></div>
<div className={style.navbar_items_list} ><div><LocationOnIcon style={{fontSize:"40px"}}/></div><div><ul><li><h4>Contact Adresse</h4></li><li><p>12 rue zaghounae</p></li></ul></div></div>
<div className={style.navbar_items_list} ><div><MailOutlineIcon style={{fontSize:"40px"}}/></div><div><ul><li><h4>Email addresse</h4></li><li><p>bakouchfakher@gmail.com</p></li></ul></div></div>


</div>
</div>
</div>

    )
  }

}
 export default Navbar