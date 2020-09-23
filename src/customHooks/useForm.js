import React, {useState} from "react";

export default function useForm(validators) {
    const [errors, setErrors] = useState([]);
    const [state, setState] = useState({
        email: "",
        name: "",
        password: ""
    });

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        let errorsArray = [];
        const validator = validators.find(item => item.field === name)
        if (validator) {
            if (validator.rules.includes('required')) {
                if (value.length === 0) {
                    setErrors([
                        ...errors,
                        { name : name, message: `The ${name} field is required`}
                    ]);
                }
            }
            // if (validator.rules.includes('email')) {
            //     if(!validateEmail(state.email)) {
            //         setErrors([
            //             ...errors,
            //             { name : name, message: `The ${name} must be type of email`}
            //         ]);
            //     }
            // }
        }

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