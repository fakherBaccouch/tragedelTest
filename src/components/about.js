import React, { Component } from 'react'
import '../stylings/style.scss';
import Image_1 from '../images/image_1of3.jpg'
import Image_2 from '../images/image_2of3.jpg'
import Image_3 from '../images/image_3of3.jpg'




class About extends Component {
    render() {
        return (
            <div className="section_about">
               
               <h2 className="section_about_header_secondary">Exctiing country for adventurous people</h2>
               <div className="section_about_main">
                   <div className="section_about_main_text">
                       <h3 className="section_about_main_text_heading_tertiary">you are going to fall in love with nature</h3>
                       <p className="section_about_main_text_paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       <h3 className="section_about_main_text_heading_tertiary">you are going to fall in love with nature</h3>
                       <p className="section_about_main_text_paragraphe"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       
                       <a  href="lol.com" className="section_about_main_text_btn">Learn more-&gt;</a>
                   </div>
                   <div className="section_about_main_images">
                  
                   <img className="section_about_main_image section_about_main_images_image_1of3" alt='first_image' src={Image_1} />
                   <img className='section_about_main_image section_about_main_images_image_2of3'  alt='second' src={Image_2} />
                   <img className='section_about_main_image section_about_main_images_image_3of3'  alt='third' src={Image_3} />
                   </div>

               </div>
</div>
        ) 
    }
}
export default About    