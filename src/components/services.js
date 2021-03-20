import React from 'react'

const Services = ()=>{

    return (
        <div className="services">
                   <div className="services_title">
                   <h1 className='heading_primary_main'>Nos services</h1>
                   <div style={{background:"#EDCD1F",width:"100px",height:"6px",textAlign:"center"}}></div> 
                   </div>
     <div className="services_content">
     <div className="services_box">
               <div id='construction' className="services_box_1">
                 
                </div>
                <div className="services_box_2">
                  <h3>Construction</h3>
                  <p>TRAGEDEL s’investie dans la construction grâce à une équipe expérimentée et capable de remporter le défi, de la planification, à la coordination en passant par la réalisation.</p>
                  <button style={{width:"60%",float:"right" ,display:"flex",marginLeft:"40%",background:"#EDCD1F",height:"fit-content"}} className="button  arrow">Voir plus</button>

                </div>
               </div>
               <div className="services_box">
               <div id='eau' className="services_box_1">
                 
                </div>
                <div className="services_box_2">
                  <h3> Eau</h3>
                  <p>TRAGEDEL contribue à la stratégie mondiale d'accès à l'eau potable. Nous prenons en charge la gestion des eaux usées urbaines et industrielles avec des méthodes de purification et de nettoyage ... </p>
                  <button style={{width:"60%",float:"right" ,display:"flex",marginLeft:"40%",background:"#EDCD1F",height:"fit-content"}} className="button  arrow">Voir plus</button>

                </div>
               </div>
               <div className="services_box">
               <div id='electricity' className="services_box_1">
                 
                </div>
                <div className="services_box_2">
                  <h3>Electricité</h3>
                  <p>TRAGEDEL est un acteur mondial de production,de distribution,et de transport d’électricité. Dans le cadre de nos projet s d’ électricité nous mettons en place les réseaux de lignes électriques industrielles, le câblage intérieur des usines, les lignes MT et BT . </p>
                  <button style={{width:"60%",float:"right" ,display:"flex",marginLeft:"40%",background:"#EDCD1F",height:"fit-content"}} className="button  arrow">Voir plus</button>

                </div>
               </div>






     </div>
             


               </div>
    )
}
export default Services