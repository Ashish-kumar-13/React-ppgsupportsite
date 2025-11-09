import React, { useState } from 'react';

const RecacheManager = ({menuData1:[menuData, consoleData]}) => {
  const [selectedSite, setSelectedSite] = useState('m.post-gazette.com/');
  const [urlPath, setUrlPath] = useState('');
  const handleRecacheSubmit = (e) => {
    e.preventDefault();
    // console.log(`Recaching ${selectedSite}${urlPath}`);
    consoleData(`Recaching ${selectedSite}${urlPath}...\nRecache request submitted successfully.`);
  };

  const handleQuickRecache = (action) => {
    // console.log(`Quick recache: ${action}`);
    consoleData(`Quick recache: ${action}...\nRecache request submitted successfully.`);
  };

  const handlePkgRecache = (site) => {
    // console.log(`PKG recache: ${site}`);
    consoleData(`PKG recache: ${site}...\nRecache request submitted successfully.`);
  };

  return (
    <div className="recache-manager">
      <div className="container">
        <h1 className="page-title">{menuData.title}</h1>
        
        <div className="recache-grid">
          <div className="recache-form-section">
            <div className="card">
              <h2 className="section-title">URL Recache</h2>
              <form onSubmit={handleRecacheSubmit} className="recache-form">
                <div className="form-group">
                  <label>URL:</label>
                  <div className="url-input-group">
                    <select 
                      value={selectedSite} 
                      onChange={(e) => setSelectedSite(e.target.value)}
                      className="site-select"
                    >
                      {menuData.siteOptions.map((site, index) => (
                        <option key={index} value={site}>{site}</option>
                      ))}
                    </select>
                    <input 
                      type="text" 
                      value={urlPath}
                      onChange={(e) => setUrlPath(e.target.value)}
                      placeholder="path"
                      className="url-input"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Recache</button>
              </form>
            </div>

            <div className="card">
              <h2 className="section-title">Quick Recache Options</h2>
              <div className="quick-recache-links">
                {menuData.recacheOptions.map((option, index) => (
                  <button
                    key={index}
                    className="recache-link"
                    onClick={() => handleQuickRecache(option.name)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pkg-recache-section">
            <div className="card">
              <h2 className="section-title">PKG File Recache</h2>
              <div className="pkg-recache-links">
                {menuData.pkgRecache.map((site, index) => (
                  <button
                    key={index}
                    className="recache-link"
                    onClick={() => handlePkgRecache(site)}
                  >
                    Recache PKG Files on {site}
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

export default RecacheManager;