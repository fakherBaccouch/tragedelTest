
import React from "react";
import { Statistic } from 'semantic-ui-react'
import style from './counters.module.scss'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const Counters = ()=>{
        const [focus, setFocus] = React.useState(false);

return (

    <div style={{zIndex:"100"}} className={style.counters}>
     
     <div className={style.counters_box}>
        
        <Statistic>
<Statistic.Value>
<CountUp start={focus ? 0 : null} end={30} duration={2} redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                 {setFocus(true);}}}>
                 <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
</Statistic.Value>
<Statistic.Label>
Ans
d'experience

</Statistic.Label>
</Statistic>

</div>   <div className={style.counters_box}>
        
        <Statistic>
<Statistic.Value>
<CountUp start={focus ? 0 : null} end={100} duration={2} redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                 {setFocus(true);}}}>
                 <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
</Statistic.Value>
<Statistic.Label>Compétences
</Statistic.Label>
</Statistic>

</div>   <div className={style.counters_box}>
        
        <Statistic>
<Statistic.Value><CountUp start={focus ? 0 : null} end={50} duration={2} redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                 {setFocus(true);}}}>
                 <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp></Statistic.Value>
<Statistic.Label>Projets
réalisés</Statistic.Label>
</Statistic>

</div>

    </div>
)





}
export default Counters