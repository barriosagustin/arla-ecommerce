import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/FloatingWhatsAppButton.css';

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/393455810250', '_blank');
  };

  return (
    <div className="floating-whatsapp-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </div>
  );
};

export default FloatingWhatsAppButton;
