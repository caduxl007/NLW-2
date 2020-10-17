import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import proffy from '../../assets/images/Proffy.svg';

import './styles.css';

function Login() {
    const [classLabel, setClassLabel] = useState('nao-clicado');

    function cliqueLabel() {
        if(classLabel === 'nao-clicado')        
            setClassLabel('clicado');
        else
            setClassLabel('nao-clicado');
    }

    return(
        <div id="page-login">
            <img src={proffy} alt="Proffy"/>

            <div className="login">
                
                <h2>Fazer login</h2>   
                <form method="post">
                    <div className="group-input">
                        <input type="text" placeholder="E-mail"></input>
                    </div>

                    <div className="group-input">
                        <input type="password" placeholder="Senha"></input>
                    </div>

                    <div className="detalhes-login">
                        <div className="lembrar-me">
                            <label className={classLabel} onClick={cliqueLabel} ></label><p>Lembrar-me</p>
                        </div>

                        <div className="esquecir-senha">
                            <Link className="link" to="/login">Esquecir senha</Link>
                        </div>
                    </div>

                    <div className="group-input">
                        <button type="submit">Entrar</button>
                    </div>
                </form>

                <div className="cadastrar">
                    <div className="sem-conta">
                        <p>Não tem conta?</p>
                        <p>É de graça</p>
                    </div>
                    <Link to="/login">Cadastra-se</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;