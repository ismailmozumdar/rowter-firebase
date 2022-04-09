import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import Header from './componant/Header/Header';
import Rigester from './componant/Rigester/Rigester';
import Products from './componant/Products/Products';
import Reviews from './componant/Reviews/Reviews';
import Profile from './componant/Profile/Profile';
import RequireAuth from './componant/RequireAuth/RequireAuth';
import Ordere from './componant/Orderes/Ordere';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/ordere" element={
          <RequireAuth>
            <Ordere></Ordere>
          </RequireAuth>
        }></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/rigester" element={<Rigester />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
