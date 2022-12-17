import {Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Auth from './pages/Auth/Auth';
import Delivery from './pages/Delivery/Delivery';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import NotFoundPage from './pages/NotFoundPages/NotFoundPage';
import Pedidos from './pages/Pedidos/Pedidos';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/admin/pedidos' element={<Pedidos />} />
      </Route>
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </div>
  );
}

export default App;
