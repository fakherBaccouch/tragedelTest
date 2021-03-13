import React, { Component } from 'react'
import '../stylings/style.scss';


class Header extends Component {
    render() {
        return (
            <div>
                <header  className='header'>

                    
                    <div className="text_box">
                        <h1 className="heading_primary">
                            <span className="heading_primary_main">TRAGEDEL
</span>
                            <span className="heading_primary_sub"> PERFECTION IS
ALWAYS
UNDER CONSTRUCTION
 </span>
                        </h1>
                        <a href='www.facebook.com' className="btn btn-white">Lire plus</a>
                    </div>
                    <i class="lba lba-basic-book"></i>


                </header>
            </div>

        )
    }
}
export default Header