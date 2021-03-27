import React,{useEffect} from 'react'
import style from './ceo.module.scss'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AOS from 'aos'
import "aos/dist/aos.css";
const Ceo=()=>{
    useEffect(
        ()=>{
      
          AOS.init({
             offset: 400, // offset (in px) from the original trigger point
             delay: 0, // values from 0 to 3000, with step 50ms
             duration: 3000 // values from 0 to 3000, with step 50ms
           });
      
        },[]
      )
    return(
        <div  data-aos="fade-down" className={style.ceo}>

         <div data-aos="fade-down" className={style.ceo_title}>
          <h2> Vice President</h2>  
          <div style={{width:'30%',height:"3px",background:'#1b1c1d'}}> </div> 
         </div>
         <div data-aos="fade-down" className={style.ceo_image}>

         </div>
         
         <div data-aos="fade-down" className={style.ceo_p}>
       <p><FormatQuoteIcon fontSize='large'/>  Sed tortor est, suscipit vel nulla ut, imperdiet pulvinar mauris. Phasellus varius ut lorem non maximus. Vestibulum lobortis augue et dictum malesuada. Cras molestie id felis id tincidunt. Vestibulum ut libero et turpis commodo euismod sed blandit sem. Donec egestas tempor arcu. Pellentesque sed justo condimentum, aliquam risus pulvinar, euismod lectus. Nam varius nibh eu sapien lobortis, at posuere eros varius...</p> 


         </div>
         <div data-aos="fade-down" className={style.ceo_name}>
           <h3 style={{color:'#1b1c1d'}}>KAMEL CHARFEDDINE</h3>
           <h5 style={{color:'#1b1c1d'}}>TRAGEDEL TUNISIE</h5>

         </div>

        </div>
    )
}
export default Ceo