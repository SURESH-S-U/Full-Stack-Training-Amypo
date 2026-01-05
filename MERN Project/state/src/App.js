import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Product from './components/Product';
import CartSummary from './components/CartSummary';

function App() {

  // Create a state
  const [count , setCount] = useState(0);

  return (
    <div className="App">
      
      <Product count={count} setCount={setCount} />

      {/* The final Updated value will  be get form the CartSummary */}
      <CartSummary count={count}/>

    </div>
  );
}

export default App;
