import React, { Component } from 'react';



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


    render() {
        return (
            <div>
                <div>This is the SignUp Component</div>
                <form>username
                    <input 
                        textAlign = 'center'
                        onChangeText = {}></input>



                </form>
            </div>

        );
    }
}

export default SignUp;