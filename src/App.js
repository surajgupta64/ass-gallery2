import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ImageCard from "./ImageCard";
import Header from "./header";
import History from "./History";

function App() {
  return (
    <div className="App">
      <Header />
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageCard />} />
          <Route path="/history" element={<History />} />
          <Route path="/cart" element={<ImageCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
