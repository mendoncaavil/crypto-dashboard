import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import CoinPage from './Pages/Coin'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/coin/:id" element={<CoinPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
