import React from 'react';
import './PopUpModal.css';

const PopUpModal = ({
  isOpen,
  header,
  bodyText,
  textColor,
  buttonText,
  buttonPath,
  onClose,
  headerBackgroundColor, // New prop for customizing the modal header background
}) => {
  if (!isOpen) return null; // Render nothing if the modal is closed

  return (
    <div className="popup-modal-overlay" onClick={onClose}>
      <div
        className="popup-modal"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header Section */}
        <div
          className="popup-modal-header"
          style={{ backgroundColor: headerBackgroundColor || '#007bff' }} // Use the custom color or default to blue
        >
          <h2>{header}</h2>
          <span className="popup-modal-close" onClick={onClose}>
            &times;
          </span>
        </div>

        {/* Body Section */}
        <div className="popup-modal-body" style={{ color: textColor }}>
          {bodyText}
        </div>

        {/* Footer Button */}
        <div className="popup-modal-footer">
          <a href={buttonPath} className="button">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;

