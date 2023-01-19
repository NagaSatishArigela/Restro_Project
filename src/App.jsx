import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import PageRouter from "./pageRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Sidebar/>
      <PageRouter />
    </div>
  );
}

export default App;
