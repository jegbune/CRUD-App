import logo from './logo.svg';
import './App.css';
// import Calculator from './calculator';
import CheckoutPage from './CheckoutPage';
import CartPage from './CartPage';
import EcommercePage from './EcommercePage'
import Navbar from './components/Navbar';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      
      {/* <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/service' element={<Service/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
      </Routes> */}
      {/* <EcommercePage /> */}
      {/* <CartPage /> */}
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
