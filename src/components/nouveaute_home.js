import React, {useEffect, useRef,useState} from "react";

import {TimelineLite ,TweenMax, Power3} from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';
import imgGirl from "../images/header_image.jpg";
import imgBoy from "../images/home_page2.jpg";
import arrow from '../assets/arrow-right.svg'
import $ from "jquery"
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../images/001.jpg'
import image2 from '../images/002.jpg'
import image3 from '../images/003.jpg'
function NouveauteHome() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .2});
  
  var    [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
      
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})



    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])



  return (
    <div className="hero" ref={el => app = el}>
     
      <div style={{zIndex:"50000"}} className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                <BackgroundSlideshow style={{opacity:"0.5"}} animationDelay={500} images={[ image1, image2, image3 ]} />

                  <div style={{color:"red"}} className="hero-content-line-inner">TRAGEDEL</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">              PERFECTION IS
</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">ALWAYS
UNDER CONSTRUCTION</div>
                </div>
                
              </h1>
        
              <div className="btn-row">
                <button className="explore-button">Lire plus
                  <div className="arrow-icon">
                    <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default NouveauteHome;
