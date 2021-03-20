import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../images/003.jpg'
import image2 from '../images/003.jpg'
import image3 from '../images/003.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { WidgetsRounded } from '@material-ui/icons'

class Header extends Component {

 
    render() {
        const  ws = ()=>{
            document.querySelector('body').scrollTo(0,100)}
                    return (
<div > <header style={{zIndex:"50000"}}  className='header'>
    <div style={{zIndex:"0"}}>
<BackgroundSlideshow style={{zIndex:"1"}}  animationDelay={3000} images={[ image1, image2, image3 ]} />

</div>
  
<div style={{zIndex:"50000"}} className="text_box">
 
    <div id='hh1' style={{background:'none'}}  className="heading_primary_sub"> PERFECTION <br></br> IS ALWAYS UNDER CONSTRUCTION</div> 

<div id="arrowbox" class="arrow-container animated fadeInDown">
  <div class="arrow-2">
  <div style={{width:"fit-content",height:"fit-content"}} id="arrow1"> <ExpandMoreIcon onClick={()=>ws()}   style={{color:"white",fontSize:"10vh"}}/></div> 
  </div>
  <div class="arrow-1 animated hinge infinite zoomIn"></div>
</div>



</div>


</header>
</div>
               

        )
    }
}
export default Header