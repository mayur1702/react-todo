import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';
import PropType from 'prop-types';
import useForm from './useForm';

const getFormElement = (field, handleChange, error) => {
    const { placeholder, helperText, label, required, disabled, type } = field;
    let check = field.type;
    let errorMessage = ``;
    if (type === 'text' || type === 'number' || type === 'password') {
        check = 'text'
    }
    if (error[field.name]) {
        errorMessage = error[field.name];
    }
    switch (check) {
        case 'text':
            return (
                <TextField
                    type={field.type}
                    required={required}
                    label={label}
                    helperText={errorMessage || helperText}
                    disabled={disabled}
                    placeholder={placeholder}
                    className="margin-bottom"
                    onChange={(event) => handleChange(event.target.value, field)}
                    style={{width: '100%'}}
                    error={!!error[field.name]}
                />
            );
    
        default:
            break;
    }
};



const CustomForm = (props) => {
    const { FormFields } = props;
    const { handleChange, handleSubmit, errors } = useForm(FormFields);
    
    return (
        <div className="form-container">
            {
                FormFields.map(field => (
                    <Container key={field.label} className="input-container">
                        {getFormElement(field, handleChange, errors)}
                    </Container>
                ))
            }
            <Container className="button-container">
                <Button variant="contained" color="primary" className="full-width" onClick={handleSubmit} >SUBMIT</Button>
            </Container>
        </div>
    );
};

CustomForm.propTypes = {
    FormFields: PropType.any
};

export default CustomForm;