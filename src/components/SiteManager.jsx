import React from 'react';
import menuData from '../data/menuData.json';
import RecacheManager from './RecacheManager';
import { useEffect } from "react";

const SiteManager = ( {menuData: [selectedMenuData, consoleData]}) => {
  const currentData = selectedMenuData || menuData.default;
  
  // Special handling for Recache section
  if (currentData.title === 'PPG Recache') {
    return <RecacheManager menuData1={[currentData,consoleData]} />;
  }

  const { title, sites, version, upgrades } = currentData;
  var count = 0;
  const handleRecycle = (site) => {
    if (window.confirm('This will recycle application pools for this site on all relevant servers. \n\n Are you sure you want to do this?')) {
      // console.log(`Recycling ${site}`);
      count++;
      consoleData(`Recycling ${site}...\nOperation completed successfully.`);
    }
  };

  const handleUpgrade = (site) => {
    if (window.confirm('This will upgrade this site to the latest version of Libercus. Are you sure you want to do this?')) {
      // console.log(`Upgrading ${site}`);
      count++;
      consoleData(`Upgrading ${site}...\nUpgrade completed successfully.`);
    }
  };
  useEffect(() => {
    consoleData(""); // clear console when SiteManager first loads
  }, []);

  return (
    <div className="site-manager">
      <div className="container">
        <h1 className="page-title">{title}</h1>
        <div className="content-grid">
          <div className="sites-section">
            <div className="card">
              <h2 className="section-title">Development Sites</h2>
              <div className="sites-table">
                {sites.map((site, index) => (
                  <div key={index} className="site-row">
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="site-link">
                      {site.name}
                    </a>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => handleRecycle(site.name)}
                    >
                      Recycle App Pools
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card version-info">
              <div className="version-text">
                <p><strong>Current release version:</strong> {version.current}</p>
                <p><strong>Last checked:</strong> {version.lastChecked}</p>
              </div>
            </div>
            
            <div className="card">
              <h2 className="section-title">Site Upgrades</h2>
              <div className="upgrade-buttons">
                {upgrades.map((upgrade, index) => (
                  <button
                    key={index}
                    className="btn btn-primary upgrade-btn"
                    onClick={() => handleUpgrade(upgrade.name)}
                  >
                    {upgrade.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteManager;