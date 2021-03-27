import React, { useEffect } from 'react'
import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';
import style from './apropos.module.scss';
import AOS from 'aos'
import "aos/dist/aos.css";


const  Apropos =() => {
  useEffect(
    ()=>{
  
      AOS.init({
         offset: 1000, // offset (in px) from the original trigger point
         delay: 0, // values from 0 to 3000, with step 50ms
         duration: 2000 // values from 0 to 3000, with step 50ms
       });
  
    },[]
  )
    return (
      <div className={style.apropos}>
        <div className={style.apropos_heading}>
          <div data-aos="fade-right" className={style.apropos_heading_1}>
            <div className={style.apropos_title}>
              <h1 id="hh1">APROPOS</h1>
              <div style={{ background: "#EDCD1F", width: "80px", height: "3px", textAlign: "center" }}></div>
            </div>

            <p id={style.p_s}>Depuis 1989, TRAGEDEL contribue avec son équipe d’ingénieurs et de consultants talentueux au succès de nombreux projet de construction. Intervenant avec une large gamme de services de qualité pour vous satisfaire tout au long d’une aventure partagée, nous garantissions la Nouveauté partout dans le monde des solutions innovantes, des services personnalisés et des conseils d’experts afin de mettre en place les bases solides d’un business long-termes soutenus par un capital humain à la hauteur de vos attentes et par des ressources haut de gamme.

</p>
            <button style={{ width: "55%", float: "right", display: "flex", marginLeft: "40%", background: "rgb(246, 196, 9)" }} className={`${style.button}  ${style.arrow}`}>Voir plus</button>


          </div>
          <div className={style.apropos_heading_2}>



          </div>
        </div>

      </div>

    )
  
}

export default Apropos