import React from "react";
import "./Login.css";
import {Formik, Form,Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Dash from "../Login/Dash.png"

// {}
const Logar = () => {

        const Navigate = useNavigate();

        function redCadastro () {
            localStorage.clear();
            Navigate("/Cadastro");
        }

        function redLogar () {
            localStorage.clear();
            Navigate("/Logar");
        }


    const handleClicklogin = (values) => {
        Axios.post("http://localhost:3010/login",{
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response)
            if (response.data.msg === "Usuário logado"){
                localStorage.clear();
                Navigate('/Dashboard');
            }
        });
      };

  const validarLogin = yup.object().shape({
      email: yup.string().email("não é um email").required("este camp é obrigatório"),
      password: yup.string().min(8, "A senha deve ter 8 caracteres").required("este camp é obrigatório"),
  });

    
  return (

    <div className="login">
        <div className="container-imagem-login">
                <img className="imagem-principal-login" src={Dash}/>
        </div>
      
        <Formik initialValues={{}} onSubmit={handleClicklogin} validationSchema={validarLogin} >
            <Form className="container-login">

                <div className="container-principal-login" >

                    <h1 className="texto-titulo-login"> Seja Bem Vindo !!!</h1>

                    <h1 className="texto-input-login">Email :</h1>
                    <Field name='email' className='input-login' placeholder='Insira seu email' />
                    <ErrorMessage 
                        component='span'
                        name='email'
                        className="text-error-login"
                    />
                
                    <h1 className="texto-input-login"> Senha : </h1>
                    <Field className="input-login" type="password" placeholder="Ex : 12345678 " id="pass" name="password"
                        minlength="8" required />
                    <ErrorMessage 
                        component='span'
                        name='password'
                        className="text-error-login"
                    />

                     <button className="botao-login" type="submit" onClick={redLogar}>Logar</button>
            
                    <a href="#"> <h1 onClick={redCadastro} className="text-link-login">Caso não tenha Cadastro Clique Aqui</h1></a> 

                </div>


               

            </Form>
        </Formik>
    </div>
  );
};

export default Logar;