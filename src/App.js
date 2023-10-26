
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header/Header';
import Hero from './components/Main/Hero';
import { Container } from '@mui/material';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import SpeakerIcon from '@mui/icons-material/Speaker';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';

const navArrayLinks = [
  {
      title: "Home", path:"/", icon:<HomeIcon/>
  },
  {
      title: "Login", path:"/Login", icon:<LoginIcon/>
  },
  
  {
      title: "Productos", path: "/Productos", icon:<SpeakerIcon/>
  },
  
  {
      title: "Carrito", path: "/Carrito", icon:<ShoppingCartIcon/>
  },
 
]

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar navArrayLinks={navArrayLinks} />
        <Hero/>
      <Container sx={{ mt:5 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/Carrito' element={<Carrito />} />
        </Routes>
      </Container>
        <ItemListContainer greeting={"Bienvenidos"}/>
        <ItemDetailContainer/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
    
    </div>

    
  );
}

export default App;
