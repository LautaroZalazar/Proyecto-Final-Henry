import './App.css';
import { Route, Routes } from "react-router-dom";
// import Navbar from './components/navbar/Navbar';
// import Products from './components/products/Products';
// import Carrito from './components/carrito/Carrito';
// import Login from './components/login/Login';
import CreateProduct from './components/createProduct/CreateProduct';

function App() {
  return (
    <div >
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="products" element={<Products />} /> */}
        {/* <Route path="carrito" element={<Carrito />} /> */}
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="createProduct" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;