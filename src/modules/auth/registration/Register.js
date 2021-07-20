import { Button, Container } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import Input from '../../shared/Input';
import './Register.scss';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            isValidForm: false
        };
    }

    checkValidation() {
        const requiredFields = ['username', 'email', 'password'];
        let isValid = true;
        requiredFields.forEach(elem => {
            if (!this.state[elem]) {
                isValid = false;
            }
        });
        this.setState({
            isValidForm: isValid
        });
    }

    onInputChange(value, field) {
        this.setState({
            [field]: value
        }, () => {
            this.checkValidation();
        });
    }
    
    render () {
        return (
            <div className="register-container">
                <div className="register-content">
                    <Container className="input-container">
                        <Input 
                            placeholder="please enter username you want" 
                            label="Username"
                            required={true}
                            onInputChange={(event) => this.onInputChange(event.target.value, 'username')}
                            value={this.state.username}
                            className="margin-bottom"
                        />
                    </Container>
                    <Container className="input-container">
                        <Input 
                            placeholder="please enter your email" 
                            label="Email"
                            required={true}
                            onInputChange={(event) => this.onInputChange(event.target.value, 'email')}
                            value={this.state.email}
                            className="margin-bottom"
                        />
                    </Container>
                    <Container className="input-container">
                        <Input 
                            placeholder="please enter your password" 
                            label="Password"
                            required={true}
                            onInputChange={(event) => this.onInputChange(event.target.value, 'password')}
                            value={this.state.password}
                            className="margin-bottom"
                        />
                    </Container>
                    <Container>
                        <Button 
                            color="primary" 
                            variant="contained" 
                            style={{width: '100%', marginTop: '14px'}}
                            disabled={!this.state.isValidForm}
                        >SUBMIT</Button>
                    </Container>
                </div>
            </div>
        );
    }
}
