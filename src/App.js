import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
