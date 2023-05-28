import "./App.css";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;