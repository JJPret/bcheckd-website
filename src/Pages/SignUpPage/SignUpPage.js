import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUpModal from '../../Components/PopUpModal/PopUpModal'; // Import the modal component
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [modalMessage, setModalMessage] = useState(''); // Track modal message
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validation logic
  const validateForm = () => {
    const { fullName, email, password, confirmPassword } = formValues;

    // Full name validation
    if (fullName.length <= 2) {
      setModalMessage('Name must be greater than 2 characters.');
      return false;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setModalMessage('Email must be valid.');
      return false;
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordRegex.test(password)) {
      setModalMessage(
        'Password must be at least 8 characters long, include a number, and a special character.'
      );
      return false;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setModalMessage('Passwords must match.');
      return false;
    }

    return true; // All validations passed
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      setIsModalOpen(true); // Show error modal
      return;
    }

    setIsLoading(true); // Show the spinner

    // Simulate a delay before showing the success modal
    setTimeout(() => {
      setIsLoading(false); // Hide the spinner
      setModalMessage('Your account has been successfully created! An agent will contact you shortly via email.');
      setIsModalOpen(true); // Show success modal
    }, 3000);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="signup-container">
      <div className="signup-header">
        <button className="button back-button" onClick={() => navigate('/')}>
          Home
        </button>
        <h1>Create Your Account</h1>
      </div>
      <form className="signup-form" onSubmit={handleSignUp} noValidate autoComplete="off">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formValues.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="button signup-button">
          {isLoading ? <div className="spinner"></div> : 'Sign Up'}
        </button>
      </form>

      {/* PopUpModal Component */}
      <PopUpModal
        isOpen={isModalOpen}
        header={modalMessage === 'Your account has been successfully created! An agent will contact you shortly via email.' ? 'Account Created' : 'Error'}
        bodyText={modalMessage}
        textColor={modalMessage === 'Your account has been successfully created! An agent will contact you shortly via email.' ? 'black' : 'black'}
        buttonText={modalMessage === 'Your account has been successfully created! An agent will contact you shortly via email.' ? 'Login' : 'Close'}
        buttonPath={modalMessage === 'Your account has been successfully created! An agent will contact you shortly via email.' ? '/login' : '/signup'}
        onClose={closeModal}
        headerBackgroundColor={modalMessage ===  'Your account has been successfully created! An agent will contact you shortly via email.' ? 'green' : 'red'}
      />
    </div>
  );
};

export default SignUpPage;

