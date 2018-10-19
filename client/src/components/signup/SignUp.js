import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        badEntry: false
    }

    submitUser = () => {
        let { username, email, password, confirm } = this.state;

    }

    handleSubmit = e => {
        event.preventDefault();
        alert('User Form Submitted ');
    }

    handleOnChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    confirmPass = e =>{
        if (e.target.name === this.state.password){
            this.setState({
                [e.target.name]: e.target.value
            })
        } else 
            e.preventDefault();
            alert('Passwords do not match. Please retype.')
            
            


    }


    render() {
        return (
            <div>
                <div>This is the SignUp Component</div>
                <form onSubmit={this.submitUser}>
                    <label>Username</label>
                    <input
                        textAlign='center'
                        onChange = {this.handleOnChange}
                        value={username}
                        name={username}
                        style={textInput}
                    />
                    <label>Email</label>
                    <input
                        textAlign='center'
                        onChange = {this.handleOnChange}
                        value={email}
                        name={email}
                        style={textInput}
                    />
                    <label>Password</label>
                    <input
                        textAlign='center'
                        onChange = {this.handleOnChange}
                        value={password}
                        name={password}
                        style={textInput}
                    />
                    <label>Confirm Password</label>
                    <input
                        textAlign='center'
                        onChange = {this.confirmPass}
                        value={confirm}
                        name={confirm}
                        style={textInput}
                    />
                    <input type="submit" value="Submit" />
                    



                </form>
            </div>

        );
    }
}

export default SignUp;