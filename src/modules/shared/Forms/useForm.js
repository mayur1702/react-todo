import { useState } from "react";
import validateForm from "./validateInfo";

const getInitialFormState = (formFields) => {
    let values = {};
    formFields.forEach(field => {
        values[field.name] = null;
    });
    return values;
};

const useForm = (formFields) => {
    const initialState = getInitialFormState(formFields);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    
    const handleChange = (value, field) => {
        const name = field.name;
        const newValues = {
            ...values,
            [name]: value
        };
        setValues(newValues);
        setErrors(validateForm(formFields, newValues));
    };

    const handleSubmit = () => {
        setErrors(validateForm(formFields, values));
        console.log(errors);
    };

    return { handleChange, handleSubmit, errors };
};

export default useForm;