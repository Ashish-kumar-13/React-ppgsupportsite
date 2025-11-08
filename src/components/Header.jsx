import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src="/assets/logo_big.svg" alt="Libercus Logo" className="logo" />
          <h1 className="title">Libercus Management System - EVA Sites</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;