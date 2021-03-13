import React, { Component } from "react"
import '../stylings/style.scss';

export default class SectionTours extends Component{
    render(){
        return (
            <div className="section-tours">
             <h1>Most popular tours</h1> 
             <div className="row">
               <div className="card">
                   <div className="card cardFront">
                   </div>
                   <div className="card cardBack">
                      Back CARD
                   </div>
                </div>                 
                <div className="card">
                   <div className="card cardFront">
                     FRONT CARD
                   </div>
                   <div className="card cardBack">
                      Back CARD
                   </div>
                </div>  
                <div className="card">
                   <div className="card cardFront">
                     FRONT CARD
                   </div>
                   <div className="card cardBack">
                      Back CARD
                   </div>
                </div>  
                 </div>              


            </div>
        )
    }
}