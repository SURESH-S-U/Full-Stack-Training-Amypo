import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Product from './components/Product';
import CartSummary from './components/CartSummary';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import CartSummary_2 from './components/CartSummary_2';

function App() {

  // Create a state
  const [count , setCount] = useState(0);

  // For multiple values, We have to create an Array
  const [cart , setCart] = useState([]);

  return (
    <div className="App">
      
      {/* Part 1 ---- Product , CartSummary */}
      <Product count={count} setCount={setCount} />

      {/* The final Updated value will  be get form the CartSummary */}
      <CartSummary count={count}/>


      <h1>Part 2 items</h1>


      {/* Part 2 ------ Navbar , ProductList , CartSumary_2*/}
      <NavBar cartCount={cart.length} />

      <ProductList cart={cart} setCart={setCart} />

      <CartSummary_2 cart={cart} />


    </div>
  );
}

export default App;
