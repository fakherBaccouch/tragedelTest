
import React from "react";
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import DoneAllRoundedIcon  from '@material-ui/icons/DoneAllRounded';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import AssistantOutlinedIcon from '@material-ui/icons/AssistantOutlined';
import { Statistic } from 'semantic-ui-react'

const Counters = ()=>{

return (

    <div style={{zIndex:"100"}} className="counters">
        <div className="counters_box">
                  <div className="two"> 
                  <Statistic>
    <Statistic.Value>100</Statistic.Value>
    <Statistic.Label>Compétences</Statistic.Label>
  </Statistic>
                   </div>
                   <span style={{background:"white",width:"2.5px",margin:"10px 10px"}}></span>   

        </div>
        <div className="counters_box">
                  <div> 
                     
                  <Statistic>
    <Statistic.Value>32</Statistic.Value>
    <Statistic.Label>Ans d'experience
</Statistic.Label>
  </Statistic>
                   </div>
                   <span style={{background:"white",width:"2.5px",margin:"10px 10px"}}></span>   

        </div><div className="counters_box">
                  <div > 
                  <Statistic>
    <Statistic.Value>50</Statistic.Value>
    <Statistic.Label>Projets
réalisés</Statistic.Label>
  </Statistic>
                   </div>
                   <span style={{background:"white",width:"2.5px",margin:"10px 10px"}}></span>   

        </div>
                  

    </div>
)





}
export default Counters