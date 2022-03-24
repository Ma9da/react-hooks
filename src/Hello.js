import React, { memo } from 'react';
import { useRef } from 'react';

const Hello = memo(({ increment }) => {
    const renders = useRef(0)
    console.log("renders: ", renders.current++);
    return (
        <div>
            <button onClick={increment}>+</button>
            <h1>hello</h1>
        </div>
    )
}
)

export default Hello;
