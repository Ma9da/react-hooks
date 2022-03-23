import { useState } from 'react';
function useForm(initialValue) {
    const [values, setValues] = useState(initialValue)
    return [
        values, 
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
            console.log(values)
        }
    ]
}

export default useForm