import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../../images/003.jpg'
import image2 from '../../images/003.jpg'
import image3 from '../../images/003.jpg'
import style from './header.module.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { WidgetsRounded } from '@material-ui/icons'

class Header extends Component {

 
    render() {
        const  ws = ()=>{
            document.querySelector('body').scrollTo(0,100)}
                    return (
<div >
     <header className={style.header}>
    <div style={{zIndex:"1"}}>
<BackgroundSlideshow style={{zIndex:"0"}} zIndex="1"  animationDelay={3000} images={[ image1, image2, image3 ]} />
</div>
  
<div style={{zIndex:"500000" ,display:'flex',justifyContent:'space-between',fontSize:'50px'}} className={style.text_box}>
 
    <h1 className="ui header" style={{zIndex:"500000",textAlign:'center',fontSize:'40px',background:'none',color:'white',lineHeight:'2'}} > PERFECTION <br></br> IS ALWAYS UNDER CONSTRUCTION</h1> 
<div id={style.arr}  style={{zIndex:"1000",color:'white',fontSize:'0px'}}>< KeyboardArrowDownIcon style={{fontSize:'100px'}}/></div>
   



         </div>


</header>
</div>
               

        )
    }
}
export default Header