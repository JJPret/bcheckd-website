import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUpModal from '../../Components/PopUpModal/PopUpModal'; // Import the modal component
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show the spinner

    // Simulate a delay before showing the modal
    setTimeout(() => {
      setIsLoading(false); // Hide the spinner
      setIsModalOpen(true); // Open the modal
    }, 3000);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-header">
        <button className="button back-button" onClick={() => navigate('/')}>
          Home
        </button>
        <h1>Forgot Your Password?</h1>
      </div>
      <p className="forgot-password-subheader">
        Enter your email address to receive a reset link.
      </p>
      <form className="forgot-password-form" onSubmit={handleResetPassword} noValidate autoComplete="off">
        <input type="email" placeholder="Email Address" required />
        <button type="submit" className="button reset-button">
          {isLoading ? <div className="spinner"></div> : 'Reset Password'}
        </button>
      </form>

      {/* PopUpModal Component */}
      <PopUpModal
        isOpen={isModalOpen}
        header="Email not Found"
        bodyText="Your email address was not found. Please try again or Sign Up"
        textColor="black"
        buttonText="Home"
        buttonPath="/"
        onClose={closeModal}
        headerBackgroundColor="red"
      />
    </div>
  );
};

export default ForgotPasswordPage;


