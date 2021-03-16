import React, { Component } from 'react'
import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';



class Apropos extends Component {
    render() {
        const onComplete = () => {
            console.log('Completed!');
          };
          
          const onStart = () => {
            console.log('Started!');
          };
        return (
            <div  className="apropos">
              <div className="apropos_heading">
                 <div className="apropos_heading_1">
                     <h4>À PROPOS</h4>
                    <h1 style={{color:"#CE2530"}} className="heading_primary">TRAGEDEL</h1>

      <p>Depuis 1989, TRAGEDEL contribue avec son équipe d’ingénieurs et de consultants talentueux au succès de nombreux projet de construction. Intervenant avec une large gamme de services de qualité pour vous satisfaire tout au long d’une aventure partagée, nous garantissions la Nouveauté partout dans le monde des solutions innovantes, des services personnalisés et des conseils d’experts afin de mettre en place les bases solides d’un business long-termes soutenus par un capital humain à la hauteur de vos attentes et par des ressources haut de gamme.

</p>
<button style={{width:"25%",float:"right" ,display:"flex",marginLeft:"75%",background:"#CE2530"}} className="button  arrow">Voir plus</button>


                 </div>
                 <div className="apropos_heading_2">
               
                 <img src={require('../images/003.jpg')} />


                 </div>
              </div>
           
               </div>

        ) 
    }
}

export default Apropos    