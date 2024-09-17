import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>update the counter and remove the coutner </h1>
        <h3>counter:- {count} </h3>
        <div style={{ display: "flex", gap: "10px" , justifyContent: "center"}}>
          <button onClick={() => setCount(count < 20 ? count + 1 : 20) }> Increment</button>
          <button 
          onClick={() => 
          setCount(count > 0 ? count - 1 : 0)}>
            Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
