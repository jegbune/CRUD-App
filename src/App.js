import logo from './logo.svg';
import './App.css';
import Calculator from './calculator';
import CheckoutPage from './CheckoutPage';
import CartPage from './CartPage';

function App() {
  return (
    <div className="App">
      <CartPage />
      {/* <CheckoutPage /> */}
      {/* <Calculator /> */}
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
