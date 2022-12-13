import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import CoinPage from './Pages/Coin'
import ComparePage from "./Pages/Compare";
import WatchList from "./Pages/WatchList";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/coin/:id" element={<CoinPage/>}/>
          <Route path="/compare" element={<ComparePage/>}/>
          <Route path="/watchlist" element={<WatchList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
