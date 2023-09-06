import './App.css';
import Cards from './components/Cards';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Spinner from './components/Spinner';
import { useContext } from 'react';
import { AppContext } from './context/context';


function App() {

  const context = useContext(AppContext)
  let {loading} = context

  return (
    <BrowserRouter>
      <Navbar />
      {loading&&<Spinner/>}
      <Routes>
        <Route exact path="/" element={<Cards />}></Route>
        <Route exact path="/category/:category" element={<Cards />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/cardByID/:id" element={<ProductDetail />}></Route>
        <Route exact path="/cart" element={<CartContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
