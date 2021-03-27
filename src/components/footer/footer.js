import React from 'react'
import style  from './footer.module.scss'
import { SocialIcon } from 'react-social-icons';
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
const Footer = ()=>{
    return (
        <div className={style.footer}>
                <div className={style.footer_container}>
                    <div className={style.footer_container_1}>
                        <h5>ABOUT US</h5>
                        <p id={style.p_aboutus}>Depuis 1989, TRAGEDEL contribue avec son équipe d’ingénieurs et de consultants talentueux au succès de nombreux projet de construction. Intervenant avec une large gamme de services de qualité pour vous satisfaire tout au long d’une aventure partagée, nous garantissions la Nouveauté partout dans le monde des solutions innovantes, des services personnalisés et des conseils d’experts afin de mettre en place les bases solides d’un business long-termes soutenus par un capital humain à la hauteur de vos attentes et par des ressources haut de gamme</p>
                         <div style={{display:'flex',justifyContent:'space-between',width:'50%'}}><SocialIcon bgColor="#f6c409" url="https://twitter.com/jaketrent" /> <SocialIcon bgColor="#f6c409" url="https://facebook.com/jaketrent" /><SocialIcon bgColor="#f6c409" url="https://linkedin.com/jaketrent" /> </div>
                    </div>
                    <div className={style.footer_container_2}>
                    <h5>OUR SERVICES</h5>
                    <div className={style.list}>
                        <a href='#'><DoubleArrowSharpIcon fontSize='small'/>Home</a>
                        <a href='#'><DoubleArrowSharpIcon fontSize='small'/>About us</a>
                        <a href='#'><DoubleArrowSharpIcon fontSize='small'/>Our services</a>
                        <a href='#'><DoubleArrowSharpIcon fontSize='small'/>Procedures</a>
                        <a href='#'><DoubleArrowSharpIcon fontSize='small'/>Our projects</a>
                        <a href='#'><DoubleArrowSharpIcon fontSize='small'/>News</a>
                    </div>
                    </div>
                    <div className={style.footer_container_3}>
                    <h5>CONTACT US</h5>
                    <div className={style.list_2}>
                        <p>TRAGEDEL,perfection is always under construction</p>
                    <div className={style.contact_icons}><LocationOnOutlinedIcon/> <p>B4, Immeuble Molka, Les berges du lac 2
1053 Tunis - Tunisie
</p></div>
                       <div className={style.contact_icons}><MailOutlineOutlinedIcon/><p>Bakouchfakher@gmail.com</p> </div>
                       <div className={style.contact_icons}><PhoneInTalkOutlinedIcon/><p>+2161111111</p> </div>
                    </div>
                  
                    </div>

                </div>
        </div>
    )
}
export default Footer