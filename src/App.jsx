import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SiteManager from './components/SiteManager';
import Console from './components/Console';
import Login from './components/Login';
import './styles/globals.css';
import './styles/Header.css';
import './styles/Navigation.css';
import './styles/SiteManager.css';
import './styles/Console.css';
import './styles/RecacheManager.css';
import './styles/Login.css';
import './styles/App.css';

function App() {
  const [selectedMenuData, setSelectedMenuData] = useState(null);
  const [consoleData, setConsoleData] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  return (
    <div className="app">
      <Header />
      <Navigation onMenuSelect={setSelectedMenuData} />
      <main className="main-content">
        <div className="content-wrapper">
          <SiteManager menuData={[selectedMenuData, setConsoleData]} />
          <Console cD={consoleData}/>
        </div>
      </main>
    </div>
  );
}

export default App;