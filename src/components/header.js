import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../images/001.jpg'
import image2 from '../images/002.jpg'
import image3 from '../images/003.jpg'

class Header extends Component {
    render() {
        return (
<div > <header style={{zIndex:"50000"}}  className='header'>
    <div style={{zIndex:"0"}}>
<BackgroundSlideshow style={{zIndex:"1"}}  animationDelay={3000} images={[ image1, image2, image3 ]} />

</div>

<div style={{zIndex:"50000"}} className="text_box">
    <h1 className="heading_primary">
        <span className="heading_primary_main">TRAGEDEL
</span>

    </h1>
    <span className="heading_primary_sub"> PERFECTION IS
ALWAYS
UNDER CONSTRUCTION
</span>
    <a style={{textTransform:"lowercase !important"}} href='www.facebook.com' className="btn btn-white heading_primary_sub">Lire plus</a>
</div>
<i class="lba lba-basic-book"></i>


</header></div>
               

        )
    }
}
export default Header