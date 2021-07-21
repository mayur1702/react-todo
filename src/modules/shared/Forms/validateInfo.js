const validateField = (field, value = "") => {

    console.log(field, value);
    
    // required validation
    const {validations} = field;
    if (validations.required && !value) {
        return `${field.label} is required`;
    }
};

export default function validateForm(fields = [], values) {
    const errors = {};
    fields.forEach(field => {
        errors[field.name] = validateField(field, values[field.name]);
    });
    console.log(errors);

    return errors;
}