import { useState } from 'react';
//https://dimitri.codes/form-validation-react-hooks/ url for the code for this hook

const useForm = (initialState = {}) => {
    const [ values, setValues ] = useState(initialState);
    const changeHandler = (event) => {
        const newValues = {...values, [event.target.name]: event.target.value};
        setValues(newValues);
    };
    return {values, changeHandler};
}