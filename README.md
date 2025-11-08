# Libercus Management System - React Application

## Overview
A modern React-based enterprise management system for Post-Gazette sites, converted from legacy HTML to a responsive, component-based architecture.

## Architecture

### Component Structure
```
src/
├── components/
│   ├── Header.jsx          # Logo and title
│   ├── Navigation.jsx      # Dropdown menu system
│   ├── SiteManager.jsx     # Main content manager
│   ├── RecacheManager.jsx  # Specialized recache interface
│   └── Console.jsx         # Terminal-style console
├── styles/
│   ├── globals.css         # CSS variables and base styles
│   ├── Header.css          # Header component styles
│   ├── Navigation.css      # Navigation dropdown styles
│   ├── SiteManager.css     # Site management interface
│   ├── RecacheManager.css  # Recache interface styles
│   ├── Console.css         # Terminal console styles
│   └── App.css            # Main layout styles
├── data/
│   └── menuData.json      # Dynamic menu configuration
└── App.jsx                # Root component
```

### Data Flow
1. **App.jsx** manages global state for menu selection
2. **Navigation.jsx** reads menuData.json and triggers state updates
3. **SiteManager.jsx** renders content based on selected menu data
4. **RecacheManager.jsx** handles special recache interface

## Key Features

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Viewport-based sizing (100vw)
- Breakpoints at 768px and 1200px

### Enterprise Styling
- CSS custom properties for consistent theming
- Professional blue color scheme (#1e3a8a, #3b82f6, #60a5fa)
- Modern shadows and transitions
- Industry-standard typography (Segoe UI)

### Dynamic Menu System
Menu data structure in `menuData.json`:
```json
{
  "default": { /* Initial staging sites view */ },
  "PPG Cluster": {
    "Dev": { /* Development sites */ },
    "Edit": { /* Edit sites */ },
    "Image": { /* Image sites */ },
    "Stage": { /* Staging sites */ },
    "Live": { /* Production sites */ },
    "Proc": { /* Processing tools */ },
    "Recache": { /* Cache management */ }
  }
}
```

### Component Specialization
- **Standard Sites**: Table layout with recycle buttons and upgrades
- **Processing Tools**: Tool-specific upgrade buttons only
- **Recache Interface**: Form + quick actions + PKG recache links

## Implementation Approach

### 1. HTML to React Conversion
- Extracted semantic structure from legacy HTML
- Converted inline styles to CSS classes
- Replaced JavaScript menu system with React state

### 2. Data Abstraction
- Created JSON configuration for all menu content
- Separated presentation from data
- Enabled easy content updates without code changes

### 3. Responsive Enhancement
- Replaced fixed widths with flexible layouts
- Added mobile navigation patterns
- Implemented proper viewport handling

### 4. Enterprise Standards
- Consistent naming conventions
- Modular CSS architecture
- Proper error handling and confirmations
- Accessibility considerations

## Menu Navigation Flow

```
Initial Load → Default Staging Sites View
     ↓
User Clicks Menu → Navigation.jsx reads menuData.json
     ↓
State Update → App.jsx updates selectedMenuData
     ↓
Content Render → SiteManager.jsx renders appropriate interface
     ↓
Special Cases → RecacheManager.jsx for cache operations
```

## Styling System

### CSS Variables
```css
:root {
  --primary-blue: #1e3a8a;
  --secondary-blue: #3b82f6;
  --accent-blue: #60a5fa;
  --light-gray: #f8fafc;
  --medium-gray: #e2e8f0;
  --dark-gray: #475569;
}
```

### Layout Strategy
- **Full viewport width**: `100vw` for maximum screen utilization
- **Grid layouts**: CSS Grid for complex arrangements
- **Flexbox**: For component-level alignment
- **Overflow management**: Proper scrolling and clipping

## Key Technical Decisions

### State Management
- Single state variable in App.jsx for menu selection
- Props drilling for data distribution
- No external state management library needed

### CSS Architecture
- Component-scoped stylesheets
- Global variables for consistency
- Mobile-first responsive design
- BEM-inspired naming conventions

### Data Structure
- JSON-based configuration
- Hierarchical menu organization
- Flexible schema for different content types
- Easy extensibility for new menu items

## Browser Compatibility
- Modern browsers (ES6+ support)
- Responsive design for all screen sizes
- CSS Grid and Flexbox support required
- No IE11 support (uses modern CSS features)

## Development Workflow
1. Update `menuData.json` for new content
2. Add corresponding CSS classes if needed
3. Test responsive behavior
4. Verify dropdown functionality
5. Confirm enterprise styling standards