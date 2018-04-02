import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // handleInputChange(event){
    //     const { name, value } = event.target;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('Submitting Form!', this.state);
    }
    
    render(){
        const formStyle = {
            fontSize: '24px'
        };

        const { email, password } = this.state;

        console.log('State:', this.state);

        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>I'm a form!</h1>
                <div>
                    <label>Email</label>
                    <br/>
                    <input name="email" style={formStyle} type="text" value={email} onChange={(e) => this.setState({email: e.target.value})}/>
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input name="password" style={formStyle} type="password" value={password} onChange={(e) => this.setState({ password: e.target.value })}/>
                </div>
                <button>Login</button>
            </form>
        )
    }
}

export default Form;
