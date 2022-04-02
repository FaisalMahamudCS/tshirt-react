import logo from './logo.svg';
import './App.css';
import Tshirt from './Components/Tshirt/Tshirt';
import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home';
const CountContext=createContext();

function App() {
  return (
    <div>
<Header></Header>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
    <Route path='/OrderReview' element={<OrderReview></OrderReview>}></Route>
    <Route path='/about' element={<About></About>}></Route> 
    <Route></Route>
   </Routes> 
   </div>
    
  

  );
}

export default App;
