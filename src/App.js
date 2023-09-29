import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ImageCard from "./ImageCard";
import Header from "./header";
import History from "./History";
import Cart from "./Cart";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [cart, setCart] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("history", JSON.stringify([]));
      localStorage.setItem("cart", JSON.stringify([]));
      console.log("create");
    }
  }, []);

 
   useEffect(() => {
    const cart1 = JSON.parse(localStorage.getItem("cart"));
    if (cart1!==undefined && cart1.length>0) {
      setCart(cart1);
      setCount(cart1.length);
    }
  }, []);


  const addToCart = (imageUrl) => {
    localStorage.setItem(
      "cart",
      JSON.stringify([...JSON?.parse(localStorage.getItem("cart")), imageUrl])
    );
    setCart(JSON.parse(localStorage.getItem("cart")));
      setCount(JSON.parse(localStorage.getItem("cart")).length);
  };

  const remove = () => {
    if (count > 0) {
    setCount(count-1)
    }
  }
  return (
    <div className="App">
      <Header count={count} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageCard add={addToCart} />} />
          <Route path="/history" element={<History />} />
          <Route path="/cart" element={<Cart rem={remove} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
