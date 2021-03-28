import React,{useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import style from './services.module.scss'
const Services = ()=>{
  useEffect(
    ()=>{
  
      AOS.init({
         offset: 200, // offset (in px) from the original trigger point
         delay: 0, // values from 0 to 3000, with step 50ms
         duration: 100// values from 0 to 3000, with step 50ms
       });
  
    },[]
  )
    return (
        <div className={style.services}>
             <div className={style.services_title}>
                   <h1>Services</h1>
                   <div style={{background:'#f6c409',width:"100px",height:"3px",textAlign:"left"}}></div> 
                   </div>
                   <br></br>
                   <br></br>
     <div className={style.services_content}>
     <div data-aos="fade" className={style.services_box}>
               <div id={style.construction} className={style.services_box_1}>
                 
                </div>
                <div className={style.services_box_2}>
                  <h3>Construction</h3>
                  <p>TRAGEDEL s’investie dans la construction grâce à une équipe expérimentée et capable de remporter le défi, de la planification, à la coordination en passant par la réalisation.</p>
                  <button style={{width:"60%",float:"right" ,display:"flex",marginLeft:"40%",background:"#f6c409"}} className={`${style.button}  ${style.arrow}`}>Voir plus</button>

                </div>
               </div>
               <div  data-aos="fade" className={style.services_box}>
               <div id={style.eau} className={style.services_box_1}>
                 
                </div>
                <div className={style.services_box_2}>
                  <h3> Eau</h3>
                  <p>TRAGEDEL contribue à la stratégie mondiale d'accès à l'eau potable. Nous prenons en charge la gestion des eaux usées urbaines et industrielles avec des méthodes de purification et de nettoyage ... </p>
                  <button style={{width:"60%",float:"right" ,display:"flex",marginLeft:"40%",background:"#f6c409"}} className={`${style.button}  ${style.arrow}`}>Voir plus</button>

                </div>
               </div>
               <div data-aos="fade" className={style.services_box}>
               <div id={style.electricity} className={style.services_box_1}>
                 
                </div>
                <div className={style.services_box_2}>
                  <h3>Electricité</h3>
                  <p>TRAGEDEL est un acteur mondial de production,de distribution,et de transport d’électricité. Dans le cadre de nos projet s d’ électricité nous mettons en place les réseaux de lignes électriques industrielles, le câblage intérieur des usines, les lignes MT et BT . </p>
                  <button style={{width:"60%",float:"right" ,display:"flex",marginLeft:"40%",background:"#f6c409"}} className={`${style.button}  ${style.arrow}`}>Voir plus</button>

                </div>
               </div>






     </div>
             


               </div>
    )
}
export default Services