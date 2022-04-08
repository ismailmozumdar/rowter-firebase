import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import Header from './componant/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
