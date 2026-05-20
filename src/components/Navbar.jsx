import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Scissors } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Designs Gallery', path: '/designs' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo-container">
          <img src="/images/logo.jpg.jpeg" alt="Thanishka Logo" className="nav-logo-img" style={{ height: '36px', width: '36px', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--primary)' }} />
          <span className="logo-text">Thanishka</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
