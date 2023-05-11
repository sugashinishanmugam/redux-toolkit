import logo from './logo.svg';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Products from './components/products';
import './App.css';
import Dashboard from './components/dashboard';
import Cart from './components/cart';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Dashboard/>}>
      <Route index element={<Products/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Route>
  ));
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
