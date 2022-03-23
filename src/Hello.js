import React from 'react';
import { useRef } from 'react';

const Hello = () => {
    const renders = useRef(0)
    console.log("hello from renders", renders.current++);
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}

export default Hello;
