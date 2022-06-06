import React from "react";
import "./Cadastro.css";
import {Formik, Form,Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Dash from "../Cadastro/Dash.png"

// {}
const Cadastro = () => {

    const Navigate = useNavigate();

    function redLogar () {
        localStorage.clear();
        Navigate("/Logar");
    }

    const handleClickRegistro = (values) => {
        Axios.post("http://localhost:3010/register",{
            email: values.email,
            password: values.password,
            user_name: values.user_name,
        }).then((response) => {
            console.log(response);
            alert(response.data.msg)
        });
      };
    
      const validarCadastro = yup.object().shape({
          email: yup.string().email("não é um email").required("este camp é obrigatório"),
          password: yup.string().min(8, "A senha deve ter 8 caracteres").required("este camp é obrigatório"),
          confirmPassword: yup.string().oneOf([yup.ref("password"), null, "As senhas não são iguais" ])
      });

    
  return (

    <div className="cadastro">
        <div className="container-imagem-cadastro">
                <img className="imagem-principal-cadastro" src={Dash}/>
        </div>
      
        <Formik initialValues={{}}  onSubmit={handleClickRegistro} validationSchema={validarCadastro} >
            <Form className="container-cadastro">

                <div className="container-principal-cadastro" >

                    <h1 className="texto-titulo-cadastro"> Faça seu Cadastro Aqui.</h1>

                    <h1 className="texto-input-cadastro">Nome :</h1>
                    <Field name='user_name' className='input-cadastro' placeholder='Insira Seu Nome Aqui' />
                    <ErrorMessage 
                        component='span'
                        name='use_name'
                        className="text-error-cadastro"
                    />

                    <h1 className="texto-input-cadastro">Email :</h1>
                    <Field name='email' className='input-cadastro' placeholder='Insira seu email' />
                    <ErrorMessage 
                        component='span'
                        name='email'
                        className="text-error-cadastro"
                    />

                    <h1 className="texto-input-cadastro">Senha :</h1>
                    <Field name='password' className='input-cadastro' placeholder='Insira sua Senha' />
                    <ErrorMessage 
                        component='span'
                        name='password'
                        className="text-error-cadastro"
                    />
                
                    <h1 className="texto-input-cadastro">Confirmar senha:</h1>
                    <Field name='confirmPassword' className='input-cadastro' placeholder='insira sua senha' />
                    <ErrorMessage 
                        component='span'
                        name='confirmPassword'
                        className="text-error-cadastro"
                    />

                    <button className="botao-cadastro" type="submit">Cadastrar</button> 
            
                     <a href="#"> <h1 onClick={redLogar} className="text-link-cadastro"> Caso Ja tenha Conta</h1> </a> 

                </div>


               

            </Form>
        </Formik>
    </div>
  );
};

export default Cadastro;