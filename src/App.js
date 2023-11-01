import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Inicio from './components/Inicio';
import Seguridad from './components/Seguridad';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' exact Component={Seguridad}/>
          <Route path='/Home' Component={Inicio}/>
        </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;

