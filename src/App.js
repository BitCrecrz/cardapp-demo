import './App.css'
import AddCard from "./components/AddCard";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";


function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route
        path="*"
        element={<Navigate to="/" />}
    />
      </Routes>
    </div>
  );
}

export default App;
