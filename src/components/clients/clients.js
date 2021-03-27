import React from "react"
import style from './clients.module.scss'
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import image6 from '../../images/6.jpg'
import image7 from '../../images/7.png'
import image8 from '../../images/8.jpg'
import image9 from '../../images/9.jpg'
import image10 from '../../images/10.jpg'
import image11 from '../../images/11.jpg'
import image12 from '../../images/12.jpg'

const Clients = () => {


    return (
        <div className={style.clients}>
             <div  className={style.clients_title}>
                <h1 style={{ textTransform: 'uppercase', lineHeight: '2' }} >NOS CLIENTS</h1>
                <div style={{ background: "#EDCD1F", width: "80px", height: "3px", textAlign: "center" }}></div>

            </div>
            <div className={style.clients_container}>
                <div><img src={image1}></img></div>
                <div><img src={image2}></img></div>
                <div><img src={image3}></img></div>
                <div><img src={image4}></img></div>
                <div><img src={image5}></img></div>
                <div><img src={image6}></img></div>
                <div><img src={image7}></img></div>
                <div><img src={image8}></img></div>
                <div><img src={image9}></img></div>
                <div><img src={image10}></img></div>
                <div><img src={image11}></img></div>
                <div><img src={image12}></img></div>
            </div>
        </div>
    )
}
export default Clients