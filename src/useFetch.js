import { useEffect } from 'react';
import { useState } from 'react';

function useFetch(url) {
    const [state, setState] = useState({data: null, loading: true})
    useEffect(()=>{
        fetch(url)
        .then(res => res.text())
        .then(text => setState({data: text, loading: false}))
    },[url])
    return state
}

export default useFetch