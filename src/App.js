import { useState } from "react";
import useForm from './useForm';

function App() {
  // useState
  const [count, setCount] = useState(0);
  const [{ count1, count2 }, setCounts] = useState({ count1: 10, count2: 15 })
  // custome Hook
  const [values, handelChange] = useForm({ name: "", password: "" })
  return (
    <>
      {/* <!-- ========== Start useState Hook ========== -->     */}
      <button onClick={() => { setCount((currentCount) => currentCount + 1) }}>increament</button>
      <p>{count}</p>
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
        <label htmlFor="pass">Password:</label> <br />
        <input type="password" name="pass" id="pass"
          value={values.password}
          onChange={handelChange}
        />
      </form>
    </>
  );
}

export default App;
