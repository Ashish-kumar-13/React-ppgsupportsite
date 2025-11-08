import React, { useState } from 'react';
import menuData from '../data/menuData.json';

const Navigation = ({ onMenuSelect }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuName, itemName) => {
    if (menuData[menuName] && menuData[menuName][itemName]) {
      onMenuSelect(menuData[menuName][itemName]);
    }
    setActiveMenu(null);
  };

  const menuItems = [
    { name: 'Cooke', items: ['Dev', 'Edit', 'Stage', 'Live', 'Proc'] },
    { name: 'Dix', items: ['Edit', 'UAT', 'Proc'] },
    { name: 'Eau Claire', items: ['Dev', 'Edit', 'Stage', 'Live', 'Proc'] },
    { name: 'EVA', items: ['Live'] },
    { name: 'Libqa', items: ['Libqa'] },
    { name: 'PPG Cluster', items: ['Dev', 'Edit', 'Image', 'Stage', 'Live', 'Proc', 'Recache'] },
    { name: 'TB Cluster', items: [] },
    { name: 'SNG Cluster', items: ['Dev', 'Edit', 'Proc', 'Stage', 'Web'] },
    { name: 'LCP', items: ['Dev', 'Edit', 'Proc', 'Stage', 'Prod Web', 'Prod DRT', 'Recache'] },
    { name: 'Reports', items: ['EVA Cluster'] },
    { name: 'Nagios', items: ['EVA Cluster', 'PPG Cluster', 'SNG Cluster', 'TB Cluster', 'Web Monitor'] }
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-menu">
          {menuItems.map((menu, index) => (
            <div 
              key={index} 
              className="nav-item"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="nav-button">
                {menu.name}
              </button>
              {activeMenu === index && menu.items.length > 0 && (
                <div className="dropdown">
                  {menu.items.map((item, itemIndex) => (
                    <button 
                      key={itemIndex} 
                      className="dropdown-item"
                      onClick={() => handleMenuClick(menu.name, item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;