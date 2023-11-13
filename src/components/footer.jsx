import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Contact Me</h3>
        <p>Email: ricardo125@live.com</p>
      </div>
      
      <div>
        <p>&copy; {new Date().getFullYear()} Ricardo Esparza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
