import React from 'react'
import Apropos from "../components/apropos/apropos"
import Heading from "../components/header/header"
import Counters from "../components/counters/counters"
import Services from "../components/services/services"
import News from "../components/news/news"
import Projects from "../components/projects/projects"
import Footer from "../components/footer/footer"
import Clients from '../components/clients/clients.js'
import Ceo from '../components/ceo/ceo.js'

const Homepage = () => {
    return (
        <div style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}>



            <Heading />
            <Counters />
            <Services />
            <Apropos />
            <Projects/>
            <Ceo/>

            <Clients />
            <News />
            <Footer />

        </div>
    )
}
export default Homepage