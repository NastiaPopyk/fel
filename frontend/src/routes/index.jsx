import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/Register";

import RegisterScreen2 from "../screens/Register2";
import ProfileScreen from "../screens/ProfileScreen";
import ShippingScreen from "../screens/ShippingScreen";
import PaymentScreen from "../screens/PaymentScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderSummary from "../screens/OrderSummary";
import AllOrders from "../screens/AllOrders";
import UserListScreen from "../screens/UserListScreen";

import User from "../screens/User";
import ProductsListScreen from "../screens/ProductsListScreen";
import ProductEditScreen from "../screens/ProductEditScreen";
import AdminOrders from "../screens/AdminOrders";


import AboutScreen from "../screens/AboutScreen.jsx";

import ContactScreen from "../screens/ContactScreen.jsx";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen1 />} />
      <Route path="/explore" element={<HomeScreen2 />} />
      <Route path="/home" element={<HomeScreen />} /> 
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="/about" element={<AboutScreen />} />
      
      <Route path="/contact" element={<ContactScreen />} />

      <Route path="/register2" element={<RegisterScreen2 />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/home/product/:id" element={<ProductScreen />} />
      <Route path="/cart/:id?" element={<CartScreen />} />
      <Route path="/shipping" element={<ShippingScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path="/placeorder" element={<OrderScreen />} />
      <Route path="/summary/:id" element={<OrderSummary />} />
      <Route path="/orders" element={<AllOrders />} />
      <Route path="/admin/allusers" element={<UserListScreen />} />

      <Route path="/admin/users/:id/edit" element={<User />} />
      <Route path="/admin/allproducts" element={<ProductsListScreen />} />
      <Route path="/admin/products/:id/edit" element={<ProductEditScreen />} />
      <Route path="/admin/allorders" element={<AdminOrders />} />
    </Routes>
  );
}

export default Router;
