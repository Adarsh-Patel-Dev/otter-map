import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from './components/Login/Login';
import Maps from './components/Maps/Maps';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </div>
  );
}

export default App;
