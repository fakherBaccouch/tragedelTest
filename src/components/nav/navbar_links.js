import React, {useState, useEffect } from 'react'
import style from './nav.module.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Navbar_links =() => {

const [active,setActive]=useState(false)
const [dropdown,setDropdown]=useState(false)


    return (
      <div>

<div className={style.navbar_links}>
<div className={style.navbar_brand}> 



 </div>
<ul id={style.desktop_list}>
    <li><a href="#">Acceuil</a ></li>
    <li><a href="#">Présentation de TRAGEDEL</a ></li>
    <li style={{display:'flex',alignItems:"center",cursor:"pointer"}}> <ArrowDropDownIcon/><a href="#"> Nos Services</a ></li>
    <li><a href="#">Notre Procédure</a ></li>
    <li><a href="#">Nos Projets</a ></li>
    <li><a href="#">Nouveauté</a></li>
    <li><a href="#">Contactez-nous</a ></li>

</ul>
<div id={style.hamburger}><div className="menu-btn">
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
        </div><MenuIcon style={{cursor:"pointer",borderLeft: "1px solid",fontSize:'40px'}} onClick={()=>setActive(!active)} fontSize='large'/></div>
</div>
<div><div id={style.responsive_list}  className={active?style.responsive:style.notResponsive} >
  
<li><a style={{color:'rgb(246, 196, 9)'}} href="#">Acceuil</a ></li>
    <li><a style={{borderTop:' 1px solid rgb(246, 196, 9)'}} href="#">Présentation de TRAGEDEL</a ></li>
    <li  ><div style={{display:"flex",justifyContent:"space-between"}}><a> Nos Services</a ><a style={{fontWeight:'bold',fontSize:'14px' , height:'45px' ,width:'45px', borderLeft: '1px solid #444',color:"#ffff"}}>
      {dropdown?<RemoveIcon  onClick={()=>setDropdown(!dropdown)}/>:<AddIcon style={{color:'rgb(246, 196, 9)'}} onClick={()=>setDropdown(!dropdown)}/>}
      
      
      
      
      </a></div> <li style={{display:dropdown?'block':'none',marginRight:'45px',marginTop:"-3px"}} className={style.sub_list_item}><a>Electricité</a></li><li style={{display:dropdown?'block':'none',marginRight:'45px'}} className={style.sub_list_item}><a>Construction</a></li><li style={{display:dropdown?'block':'none',marginRight:'45px'}} className={style.sub_list_item}><a>Eau</a></li></li>
    <li><a href="#">Notre Procédure</a ></li>
    <li><a href="#">Nos Projets</a ></li>
    <li><a href="#">Nouveauté</a></li>
    <li><a href="#">Contactez-nous</a ></li>

  
    

  
</div></div>
</div>
    )

}

 export default Navbar_links