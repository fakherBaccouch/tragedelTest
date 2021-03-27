import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

import image1 from '../../images/n1.jpg';
import image2 from '../../images/n2.jpg';
import image3 from '../../images/n3.jpg';
import style from './news.module.scss'
const News = () => {
    useEffect(
        ()=>{
      
          AOS.init({
             offset: 100, // offset (in px) from the original trigger point
             delay: 0, // values from 0 to 3000, with step 50ms
             duration: 1000 // values from 0 to 3000, with step 50ms
           });
      
        },[]
      )

    return (
        <div  className={style.news}>
            <div  className={style.news_title}>
                <h1 style={{ textTransform: 'uppercase', lineHeight: '2' }} >Nouveauté</h1>
                <div style={{ background: "#EDCD1F", width: "80px", height: "3px", textAlign: "center" }}></div>

            </div>
            <div data-aos="fade-down" className={style.news_container}>
                <div className={style.news_box}>
                    <div id={style.first} className={style.news_box_1}>
                        <div className={style.news_box_1_1}>

                            <div className={style.news_box_1_1_1}>03</div>
                            <div className={style.news_box_1_1_2}>Jun</div>



                        </div>

                    </div>

                    <div className={style.news_box_2}>


                        <h3 className="ui header">Signature du contrat</h3>
 <p>à la République Centrafricaine (RCA) ayant pour objet l’acquisition et l’installation des 4 générateurs d’une puissance de production de 2.5 MW pour chacun d’entre eux et l’éclairage photovoltaïque publique de la capitale Bangui</p>
                        <button className={`${style.button} ${style.button4}`}>Lire plus</button>
                    </div>

                </div>
                <div className={style.news_box}>
                    <div id={style.second} className={style.news_box_1}><div className={style.news_box_1_1}>

                        <div className={style.news_box_1_1_1}>03</div>
                        <div className={style.news_box_1_1_2}>Jun</div>



                    </div></div>
                    <div className={style.news_box_2}>
                        <h3 className="ui header">Partenariat</h3>
                        <p>Partenariat avec dees acteurs mondiaux dans le secteur de l'energie renouvelable</p>
                        <button className={`${style.button} ${style.button4}`}>Lire plus</button>
                    </div>
                </div>
                <div className={style.news_box}>
                    <div id={style.third} className={style.news_box_1}><div className={style.news_box_1_1}>
               
                                  <div className={style.news_box_1_1_1}>03</div>
                                    <div className={style.news_box_1_1_2}>Jun</div>

               
               
                                                          </div>
                         
                         </div>




                    <div className={style.news_box_2}>
                        <h3 className="ui header">Signature du contrat</h3>

                        <p> Montage et Installation des lampadaires d’éclairage public en panneaux solaires photovoltaïques dans les villes de Bangassou avec l'unops</p>
                        <button className={`${style.button} ${style.button4}`}>Lire plus</button>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default News
