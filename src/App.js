import { useState } from "react";

function App() {
  // gets fired on rerendring
  const [count, setCount] = useState(0);
  const [{ count1, count2 }, setCounts] = useState({ count1: 10, count2: 15 })
  return (
    <>
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
    </>
  );
}

export default App;
