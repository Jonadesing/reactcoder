import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header/Header';
import Hero from './components/Main/Hero';
import { Container } from '@mui/material';
import { Route, Routes, } from 'react-router-dom';
import SpeakerIcon from '@mui/icons-material/Speaker';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext/CartContext';
import Checkout from './components/Checkout/Chekout'; 
import Cart from './components/Cart/Cart'


const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Login",
    path: "/Login",
    icon: <LoginIcon />,
  },
  {
    title: "Productos",
    path: "/Productos",
    icon: <SpeakerIcon />,
  },
  {
    title: "Carrito",
    path: "/Carrito",
    icon: <ShoppingCartIcon />,
  },
];

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <NavBar navArrayLinks={navArrayLinks} />
        <Hero />
        <Container sx={{ mt: 5 }}>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos por categoria'} />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/Carrito" element={<Cart/>} />
              <Route path="/Productos" element={<ItemListContainer greeting={'Productos'} />} />
              <Route path="/checkout" element={<Checkout />} /> 
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />

            </Routes>
        </Container>
      </CartProvider>
    </div>
  );
}


export default App;
