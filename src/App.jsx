import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Layout from "./components/mainLayout";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/dashboard" element={<Layout />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        </Sidebar> 
      </div>
    </div>
  );
}

export default App;
