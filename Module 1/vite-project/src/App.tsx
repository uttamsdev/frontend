import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {InputTag} from "react-input-tag-field";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-white">
        <InputTag />
      </main>
    </>
  );
}

export default App;
