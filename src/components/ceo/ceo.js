import React,{useEffect} from 'react'
import style from './ceo.module.scss'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AOS from 'aos'
import "aos/dist/aos.css";
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp';

const Ceo=()=>{
    useEffect(
        ()=>{
      
          AOS.init({
             offset: 400, // offset (in px) from the original trigger point
             delay: 0, // values from 0 to 3000, with step 50ms
             duration: 1000, // values from 0 to 3000, with step 50ms
             easing:'ease-in'
           });
      
        },[]
      )
    return(
        <div  className={style.ceo}>

         <div data-aos="fade-down" className={style.ceo_title}>
          <h2> Vice President</h2>  
          <div style={{width:'30%',height:"3px",background:'#1b1c1d'}}> </div> 
         </div>
         <div data-aos="zoom-in" className={style.ceo_image}>

         </div>
         <div data-aos="fade-down" className={style.ceo_name}>
           <h2 style={{color:'#fff'}}>KAMEL CHARFEDDINE</h2>

         </div>
         <div data-aos="fade-up" className={style.ceo_p}>
       <p><FormatQuoteIcon fontSize='large'/>  Sed tortor est, suscipit vel nulla ut, imperdiet pulvinar mauris. Phasellus varius ut lorem non maximus. Vestibulum lobortis augue et dictum malesuada. Cras molestie id felis id tincidunt. Vestibulum ut libero et turpis commodo euismod sed blandit sem. Donec egestas tempor arcu. Pellentesque sed justo condimentum, aliquam risus pulvinar, euismod lectus. Nam varius nibh eu sapien lobortis, at posuere eros varius...</p> 
       <p style={{fontWeight:'450',color:'#333333',fontSize:"1rem",letterSpacing:"2px"}}>Read the story <DoubleArrowSharpIcon fontSize="small"/></p>


         </div>
         <div className={style.ceo_more}>
         </div>
        

        </div>
    )
}
export default Ceo