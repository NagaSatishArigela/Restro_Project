import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import MainDash from "./components/main/main";
import RightSide from "./components/rightside/rightSide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
