import React, { useState } from 'react';
import '../../../assets/css/login.css';
import 'https://kit.fontawesome.com/b8ffcf0824.js';
import logo from '../../../assets/images/logo.png';
import { login, signUp } from '../../../service/users/loginApi';

const Login: React.FC = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await login(email, password);
    if (response.success) {
      window.location.href = '/admin';
    } else {
      alert(response.message);
    }
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await signUp(name, email, password);
    if (response.success) {
      alert('Sign up successful! Please log in.');
      setIsRightPanelActive(false);
    } else {
      alert(response.message);
    }
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Đăng Kí</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>hoặc sử dụng email của bạn để đăng kí</span>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Đăng kí</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}>
          <h1>Đăng Nhập</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>Đăng nhập bằng tài khoản của bạn</span>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <a href="#">Quên Mật Khẩu?</a>
          <button type="submit">Đăng Nhập</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1><img className='logo' src="https://bizweb.dktcdn.net/100/369/010/themes/914385/assets/logo.png?1719800579188" alt="DirtyCoins" /></h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1><img className='logo' src={logo} alt="DirtyCoins" style={{ width: '200px', height: 'auto' }}/></h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
