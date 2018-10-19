import React, { Component } from 'react';



class Forms extends Component {
    state = {
      companyName: '',
      linkToJob: '',
      jobStatus: '',
      notes: ''
    }
  
    handleOnChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitUser = () => {
        
    }

    render() { 
        return (
            <div>
                <div>This is the Job Forms Component</div>
                <form onSubmit={this.submitUser}>
                    <label className="title">Company Name</label>
                    <input
                        onChange = {this.handleOnChange}
                        value="companyName"
                        name="companyName"
                        
                    />
                    <label className="title">Job Prospects</label>
                    <input
                        textAlign='center'
                        onChange = {this.handleOnChange}
                        value="linkToJob"
                        name="linkToJob"
                        
                    />
                    <label>
                    Current Status
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option selected value = ''>Please Select</option>
                        <option value='0'>Call Back</option>
                        <option value='1'>Phone Interview</option>
                        <option value='2'>In Person 1</option>
                        <option value='3'>In Person 2</option>
                        <option value='4'>In Person 3</option>
                        <option value='5'>Offer Received</option>
                    </select>
                    </label>
                    
                    <label>Notes</label>
                    <textarea
                        textAlign='center'
                        onChange = {this.handleOnChange}
                        placeholder="Notes about..."
                        value='notes'
                        name='notes'
                        style={{ width: "200px" }}
                    />
                
                </form>
            </div>
          );
    }
}
 
export default Forms;