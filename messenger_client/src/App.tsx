import '@/App.css';
import Home from './pages/unAuthenticate/Home';
import Login from './pages/unAuthenticate/login/Login';
import Register from './pages/unAuthenticate/register/Register';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Feather from './pages/authenticate/Feather';
import NavigationBar from './pages/unAuthenticate/NavigationBar';

function App() {
  function auth() : boolean {
    return useSelector((state: RootState) => state.user.isAuth);
  }

  return (
    <BrowserRouter>
      <div className="mx-auto min-h-screen max-h-screen flex flex-col">
        {!auth() && 
          <NavigationBar/>
        }
        
        <Routes>
          <Route path='/' element={ !auth() ? <Home /> : <Navigate to="/app"/> } />
          <Route path='/login' element={ !auth() ? <Login /> : <Navigate to="/app"/> } />
          <Route path='/register' element={ !auth() ? <Register /> : <Navigate to="/app"/> } />
          <Route  path='/app' element={ auth() ? <Feather /> : <Navigate to="/"/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
