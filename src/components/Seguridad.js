import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './TokenForm.css';

const Seguridad = () => {
  const [token, setToken] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (token === 'Hola') {
      login();
      navigate('/Home');
    } else {
      setError('Token incorrecto. Inténtalo de nuevo.');
    }
  }

  return (
    <div>
      <img src='GC.jpg' alt='Gobierno_Colombiano' className='token-image'></img>
      <h2 className='heading'>Ingrese el token para habilitar las urnas electronicas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Ingresa el token"
          className='token-input'
          autoFocus
        />
        <button 
          type="submit" 
          className='token-button'>Enviar</button>
      </form>
      {error && <div className='error'>{error}</div>}
    </div>
  );
}

export default Seguridad;
