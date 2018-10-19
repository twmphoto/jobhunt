import React, { Component } from 'react';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';


class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className="hero is-info is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                JobHunt
                            </h1>
                            <h2 className="subtitle">
                                A new way of getting a job
                            </h2>
                            <Link className='button' to='/dashboard'>Get Started</Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
         );
    }
}
 
export default HomePage;