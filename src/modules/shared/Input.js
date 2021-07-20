import { TextField } from '@material-ui/core';
import React from 'react';
import PropType from 'prop-types';

const style = {
    width: '100%'
};

const Input = (props) => {
    const { placeholder, label, required, error, value, onInputChange, className } = props;
    return (
        <TextField 
            placeholder={placeholder}
            label={label}
            style={style}
            required={required}
            error={error}
            value={value}
            onChange={onInputChange}
            className={className}
        />
    )
};

Input.propTypes = {
    placeholder: PropType.string,
    label: PropType.string,
    required: PropType.bool,
    error: PropType.bool,
    value: PropType.string,
    onInputChange: PropType.func,
    className: PropType.string
}

export default Input;