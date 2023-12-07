import './App.css';
import { Routes, Route } from 'react-router-dom'
import Mens from './Components/Mens';
import Women from './Components/Women';
import Kids from './Components/Kids';
import ShopPage from './Components/ShopPage';
import Login from './Login/Login';
import Register from './Login/Register';
import ForgotPassword from './Login/Forget';
import AddProduct from './Components/AddProduct';
import AdminHomePage from './Components/AdminHomePage';
import DeleteProduct from './Components/DeleteProduct';
import ProductPage from './Components/ProductPage';
import Cart from './Components/Cart';



function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/Mens' element={<Mens />} />
        <Route path='/Women' element={<Women />} />
        <Route path='/Kids' element={<Kids />} />
        <Route path='/Shop_Page' element={<ShopPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/RegisterPage' element={<Register />} />
        <Route path='/Forget-password' element={<ForgotPassword />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Admin_Home_Page' element={<AdminHomePage />} />
        <Route path='/deleteProduct' element={<DeleteProduct />} />
        <Route path='/' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
