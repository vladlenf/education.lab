import {useEffect, useState} from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [repeatPasswordError, setRepeatPasswordError] = useState(true)

    const [inputValid,setInputValid] = useState(false)

    useEffect(() => {
        for(const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] && value.length > 0 ? setMinLengthError(true): setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false): setEmpty(true)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true): setMaxLengthError(false)
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'repeatPassword':
                    /*value.length === 2 && value.*/
                    break;
                case 'isExists':

                    break;
            }
        }
    }, [value])

    useEffect(()=> {
        if(isEmpty || maxLengthError || minLengthError){
            setInputValid(false)
        }
        else {
            setInputValid(true)
        }
    },[isEmpty, maxLengthError, minLengthError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        repeatPasswordError,
        inputValid
    }
}

export const useInput = (initialValue, validations) => {
    const [value,setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}