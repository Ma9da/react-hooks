import { useReducer } from "react";
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
// useReducer
function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}
const Third = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <button onClick={() => dispatch({ type: INCREMENT })}>+ </button>
            <span>{count}</span>
            <button onClick={() => dispatch({ type: DECREMENT })}>- </button>
        </>
    );
}

export default Third;
