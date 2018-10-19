import React, { Component } from 'react';
import JobCard from './JobCard'
import Navbar from '../navbar/navbar'

class Dashboard extends Component {
    state = { 
        jobs: []
     }
    render() { 
        return ( 
            <div id="navbar">
                <Navbar />
                    <p className="title">Pending Jobs</p>
                        <div className="columns is-multiline">
                            <div className="column is-8">
                                <JobCard 
                                    company="Google"
                                    dateApplied="June"
                                    posting="posting"
                                    status="Applied"
                                    notes="applied on indeed"
                                    interview="no"
                                    phoneInterview="yes"
                                    />
                                </div>
            <p className="title">Did not move on</p>
            <div className="column is-8">
                    <JobCard
                        company="Google"
                        dateApplied="June"
                        posting="posting"
                        status="Applied"
                        notes="applied on indeed"
                        interview="no"
                        phoneInterview="yes"
                        />
                    </div>
            </div>
        </div>
        );
    }
}
 
export default Dashboard;