import React from 'react';
import './Inicio.css';

export default function Inicio() {
  const handleButtonClick = () => {
    window.open('', 'popup', 'width=300,height=200');
    const popupContent = `
      <div>
        <p>Todo funciona correctamente</p>
        <button onclick="window.close()">Cerrar</button>
      </div>
    `;
    const popupWindow = window.open('', 'popup', 'width=300,height=200');
    popupWindow.document.write(popupContent);
  }

  return (
    <div className='container'>
      <img src='Logo_Colombia.png' alt='Logo_Colombia'></img> 
      <h1>Bienvenido al Sistema de Votacion del Gobierno Colombiano</h1>
      <h2>Ingrese su documento de identidad para empezar su proceso de votacion</h2>
      <input className='input'
        type="password"
        name='search'
        placeholder="Ingresa el token"
      />
      <button
        type="button"
        className='boton'
        onClick={handleButtonClick}
      >
        Enviar
      </button>
    </div>
  )
}
