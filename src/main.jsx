import React from 'react'
import ReactDOM from 'react-dom'
import SaludoPrueba from './App.jsx' //el nombre de la funcion puede ser el que queramos
import './index.css'
import {SaludoForzado, Despedida} from'./ExportacionesForzadas.jsx' //en las fz obligatorio poner {} y que el nombre de la funct sea igual

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SaludoPrueba />
    
      <SaludoForzado />
      <Despedida />
    
  </React.StrictMode>
)