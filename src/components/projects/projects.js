import React,{useEffect} from "react"
import AOS from 'aos'
import "aos/dist/aos.css";
import image1 from '../../images/001.jpg';
import image2 from '../../images/002.jpg';
import image3 from '../../images/003.jpg';
import image from '../../images/003.jpg';

import style from './projects.module.scss'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const Projects = ()=>{
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
        <div className={style.projects}> 
<div className={style.projects_title}>
<h1 >NOS PROJET</h1>
      <div style={{background:"#f6c409",width:"100px",height:"3px",textAlign:"center"}}></div> 

                   </div>
<br></br>
<br></br>
<div className={style.projects_container}>
<div id={style.test}  data-aos="fade-right"  > 
<img src={image2}></img>  
<div className={style.middle}>
    <div  ><a href="#"><AddCircleOutlineIcon style={{cursor:'pointer',fontSize:'5em',color:'#000000'}} /></a> </div>
  </div>
  
  </div>
<div id={style.test2} data-aos="fade-left"  > <img src={image}></img>
<div className={style.middle}>
    <div > <AddCircleOutlineIcon href="#" style={{cursor:'pointer',fontSize:'5em',color:'#000000'}} /></div>
  </div></div>
<div id={style.test3} data-aos="fade-right"  > <img src={image3}></img>
<div className={style.middle}>
    <div > <AddCircleOutlineIcon href="#" style={{cursor:'pointer',fontSize:'5em',color:'#000000'}} /></div>
  </div></div>
<div  id={style.test4} data-aos="fade-left"  > <img src={image1}></img>
<div className={style.middle}>
    <div > <AddCircleOutlineIcon href="#" style={{cursor:'pointer',fontSize:'5em',color:'#000000'}} /></div>
  </div></div>

</div>


        </div>
    )
}
export default Projects 