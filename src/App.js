import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ImageCard from "./ImageCard";
import Header from "./header";
import History from "./History";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Header />
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageCard />} />
          <Route path="/history" element={<History />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
