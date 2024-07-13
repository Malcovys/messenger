import '@/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Messenger from './pages/Messenger';

function App() {
  function auth() {
    return useSelector((state: RootState) => state.user.isAuth);
  }

  return (
    <BrowserRouter>
      <div className="container mx-auto min-h-screen max-h-screen">
        {!auth() && 
          <nav id='head-bar'>
            <NavLink to="/">Acceuil</NavLink>
            <NavLink to="/login">Se connecter</NavLink>
            <NavLink to="/register">Créer un compte</NavLink>
          </nav>
        }
        
        <Routes>
          <Route path='/' element={ !auth() ? <Home /> : <Navigate to="/app"/> } />
          <Route path='/login' element={ !auth() ? <Login /> : <Navigate to="/app"/> } />
          <Route path='/register' element={ !auth() ? <Register /> : <Navigate to="/app"/> } />
          <Route  path='/app' element={ auth() ? <Messenger /> : <Navigate to="/"/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
