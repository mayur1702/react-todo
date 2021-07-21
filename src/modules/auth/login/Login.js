import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomForm from '../../shared/Forms/CustomForm';
import './Login.scss';

const LoginFormFields = [
    {
        type: "text",
        placeholder: "Enter your email id",
        helperText: "",
        label: "Email ID",
        required: true,
        disabled: false,
        name: 'email',
        validations: {
            length: null,
            minLength: null,
            maxLength: null,
            email: true,
            pattern: null,
            required: true
        }
    },
    {
        type: "password",
        placeholder: "Enter your password",
        helperText: "",
        label: "Password",
        required: true,
        disabled: false,
        name: 'password',
        validations: {
            length: null,
            minLength: null,
            maxLength: null,
            email: false,
            pattern: null,
            required: true
        }
    }
];

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <CustomForm FormFields={LoginFormFields} />
                <Container className="margin-top">
                    <Link to="/auth/register">Not a user? Register here</Link>
                </Container>
            </div>

        </div>
    );
};

export default Login;