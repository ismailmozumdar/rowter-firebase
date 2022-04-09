import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import Header from './componant/Header/Header';
import Rigester from './componant/Rigester/Rigester';
import Products from './componant/Products/Products';
import Orderes from './componant/Orderes/Orderes';
import Reviews from './componant/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Orderes" element={<Orderes/>}></Route>
        <Route path="/Reviews" element={<Reviews/>}></Route>
        <Route path="/Rigester" element={<Rigester/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
