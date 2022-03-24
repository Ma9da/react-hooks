import { useLayoutEffect, useState } from 'react';
const useMeasure = (ref, deps) => {
    const [rect, setRect] = useState({})
    useLayoutEffect(() => {
        setRect(ref.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
    return rect
}

export default useMeasure;
