import React, { Component } from 'react';
import HeroHead from './HeroHead'
import Footer from '../footer/footer'


class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HeroHead 
                title="Job Hunt"
                subtitle="Welcome to a new way of job tracking."
                />
                <Footer />
            </div>
         );
    }
}
 
export default HomePage;