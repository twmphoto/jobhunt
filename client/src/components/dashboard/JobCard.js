import React from 'react';
import './dashboard.css'

const JobCard = props => {
    return ( 
        <div className="card container" id="card">
            <div className="card content">
                <div>
                    {/* Move this button to the right */}
                    <a className="button is-danger">
                        <span>Remove</span>
                        <span className="icon is-small">
                            <i className="fas fa-times"></i>
                        </span>
                    </a>
                </div>
                <table className="table is-narrow">
                    <tbody>
                        <tr>
                            <td>Company: {props.company}</td>
                            <td>Date Applied: {props.dateApplied}</td>
                            <td><a href={props.url}>Link to Job Post</a></td>
                        </tr>
                        <tr>
                            <td>Status: {props.status}</td>
                            <td>Notes: {props.notes}</td>
                        </tr>
                        <tr>
                            <td>Interview: {props.interview}</td>
                            <td>Phone Interview: {props.phoneInterview}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default JobCard;