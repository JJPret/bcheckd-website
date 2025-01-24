import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUpModal from '../../Components/PopUpModal/PopUpModal';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 3000);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="login-container">
      <div className="login-header">
        <button className="button back-button" onClick={() => navigate('/')}>
          Home
        </button>
        <h1>Login to Your Account</h1>
      </div>

      {/* <p className="login-subheader">
        <div>Doctors can send and manage informed consent.</div>
        <div>Patients can sign and view consents and education material.</div>
      </p> */}

      <form className="login-form" onSubmit={handleLogin} noValidate autoComplete="off">
        <input
          type="email"
          name="email"
          placeholder="Username (Email)"
          value={formValues.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          {isLoading ? <div className="spinner"></div> : 'Login'}
        </button>
      </form>

      <div className="button-group">
        <button onClick={() => navigate('/forgot-password')} className="button">
          Forgot Password
        </button>
        <button onClick={() => navigate('/signup')} className="button">
          Sign Up
        </button>
      </div>

      <PopUpModal
        isOpen={isModalOpen}
        header="Failed Login Attempt"
        bodyText="Username/Password does not exist. Please try again or Sign Up."
        textColor="black"
        buttonText="Sign Up"
        buttonPath="/signup"
        onClose={closeModal}
        headerBackgroundColor="red"
      />
    </div>
  );
};

export default LoginPage;
