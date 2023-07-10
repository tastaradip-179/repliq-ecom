import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/signinup/Index";
import Home from "./components/home/Index";
import ProductAdd from "./components/products/Add";
import Product from "./components/products/Detail";
import ProductList from "./components/products/List";
import Customer from "./components/customers/Detail";
import CustomerList from "./components/customers/List";
import OrderDetail from "./components/orders/Detail";
import OrderList from "./components/orders/List";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/products/add" element={<ProductAdd/>} />
            <Route path="/products/:id" element={<Product/>} />
            <Route path="/products/list" element={<ProductList/>} />
            <Route path="/customers/:id" element={<Customer/>} />
            <Route path="/customers/list" element={<CustomerList/>} />
            <Route path="/orders/:id" element={<OrderDetail/>} />
            <Route path="/orders/list" element={<OrderList/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
