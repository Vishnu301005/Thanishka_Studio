import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Scissors } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Scissors size={28} />
              <span>Thanishka</span>
            </Link>
            <p className="footer-desc">
              Elevating women's fashion with bespoke tailoring, exquisite bridal wear, and premium boutique collections. Experience the perfect fit.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Instagram"><span style={{fontWeight: 'bold', fontSize: '14px'}}>IG</span></a>
              <a href="#" className="social-link" title="Facebook"><span style={{fontWeight: 'bold', fontSize: '14px'}}>FB</span></a>
              <a href="#" className="social-link" title="Twitter"><span style={{fontWeight: 'bold', fontSize: '14px'}}>X</span></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/designs">Designs Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#">Custom Stitching</a></li>
              <li><a href="#">Bridal Wear</a></li>
              <li><a href="#">Designer Blouses</a></li>
              <li><a href="#">Alterations</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Fashion Street, Boutique Avenue, City, State 12345</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>hello@thanishka.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Thanishka Boutique & Tailors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
