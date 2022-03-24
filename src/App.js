import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useForm from './useForm';
import useFetch from './useFetch';
import Hello from "./Hello";
import useMeasure from './useMeasure';

function App() {
  // useState
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count")
    ));
  const [{ count1, count2 }, setCounts] = useState({ count1: 10, count2: 15 })
  // custome Hook
  const [values, handelChange] = useForm({ name: "", password: "" })
  // useEffect
  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   }
  //   // mount add +
  //   window.addEventListener('mousemove', onMouseMove)
  //   // unmount cleanup -
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, []);
  const { data } = useFetch(`http://numbersapi.com/${count ? count : 0}`)
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])
  // useRef
  const inputRef = useRef()
  const [showHello, setShowHello] = useState(true)
  // useLayoutEffect
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, [])
  const pRef = useRef()
  const rect = useMeasure(pRef, [data])
  return (
    <>
      {/* <!-- ========== Start useState Hook ========== -->     */}
      <p>{count}</p>
      <button onClick={() => { setCount((currentCount) => currentCount + 1) }}>increament</button>
      <p>count 1: {count1}</p>
      <button onClick={() => {
        setCounts(currentState => ({
          ...currentState,
          count1: currentState.count1 + 10
        }
        ))
      }}
      >
        increment count 1
      </button>
      <p>count 2: {count2}</p>
      <button onClick={() => {
        setCounts((currentState) => ({
          ...currentState,
          count2: currentState.count2 + 15
        }
        ))
      }}
      >
        increment count 2
      </button>
      <br />
      <br />
      {/* <!-- ========== Start custome hook ========== -->     */}
      <form>
        <label htmlFor="name">User name:</label> <br />
        <input type="text" name="name" id="name"
          value={values.name}
          onChange={handelChange}
        />
        <br />
        <label htmlFor="password">Password:</label> <br />
        <input type="password" name="password" id="password"
          value={values.password}
          onChange={handelChange}
        />
      </form>
      {/* <!-- ========== Start useEffect hook ========== -->     */}
      <p ref={pRef}>{!data ? 'loading...' : data}</p>
      {/* <!-- ========== Start useLayoutEffect hook ========== -->     */}
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      {/* <!-- ========== Start useEffect hook ========== -->     */}
      <br />
      <br />
      <label htmlFor="bubbles">bubbles:</label>
      <input ref={inputRef} type="checkbox" name="bubbles" id="bubbles" />
      <button onClick={() => inputRef.current.checked = true}>check bubbles</button>
      <br />
      {showHello && <Hello />}
      <br />
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
    </>
  );
}

export default App;
