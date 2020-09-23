import React, {useEffect, useState} from "react";

export default function useForm(validators) {
    const [errors, setErrors] = useState([]);
    const [state, setState] = useState({
        email: "",
        name: "",
        password: ""
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        let errorsArray = [];
        const validator = validators.find(item => item.field === name)
        if (validator) {
            if (validator.rules.includes('required')) {
                if (value.length === 0) {
                    errorsArray = [...errorsArray, { name : name, message: `The ${name} field is required`}]
                }
            }
            // if (validator.rules.includes('email')) {
            //     errors[name] = `The ${name} must be type of email`
            // }
        }
        setErrors(errorsArray)
        setState({
            ...state,
            [name]: value
        });
    }

    return {
        handleInputChange,
        state,
        errors
    };
}