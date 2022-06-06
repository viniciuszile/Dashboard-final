import React from "react";
// import Body from "../Componentes/Componentes_dash/main/body/body"
import Dashboard from "../Componentes/Componentes_dash/Dashboard";
import Logar from "../Componentes/Componentes_Login/Login/Logar";
import Cadastro from "../Componentes/Componentes_Login/Cadastro/Cadastro";
import {BrowserRouter, Routes, Route} from "react-router-dom"



export default function Rotas() {
    return (
      <div className="rotas">
        <BrowserRouter >
          <Routes>

            <Route path='/' element={<Logar/>} />  

            <Route path='/Dashboard' element={<Dashboard/>} />

            <Route path='/Cadastro' element={<Cadastro/>} />
            <Route path="/Logar"  element={<Logar/>} /> 


          </Routes>
        </BrowserRouter>
      </div>
    );
  }