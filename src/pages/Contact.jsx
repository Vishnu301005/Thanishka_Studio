import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="heading-xl text-center">Get In Touch</h1>
          <p className="text-body text-center mt-4 max-w-2xl mx-auto">
            Ready for your perfect fit? Book a consultation, ask a question, or just say hello. We are here to help you look your best.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="contact-grid">
          
          <div className="contact-info-col">
            <h2 className="heading-md mb-8">Contact Information</h2>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="icon-wrapper"><Phone /></div>
                <div>
                  <h3>Phone / WhatsApp</h3>
                  <p>+91 8978339811</p>
                  <a href="https://wa.me/918978339811" className="whatsapp-link mt-2" target="_blank" rel="noreferrer">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="info-card">
                <div className="icon-wrapper"><Mail /></div>
                <div>
                  <h3>Email</h3>
                  <p>hello@thanishka.com</p>
                  <p>support@thanishka.com</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="icon-wrapper"><MapPin /></div>
                <div>
                  <h3>Location</h3>
                  <p>Plot No. 179/180/181, Sri Manikanta Residency,</p>
                  <p>Bandaru Layout, Road No.3, Nizampet, Hyderabad - 500 090</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="icon-wrapper"><Clock /></div>
                <div>
                  <h3>Working Hours</h3>
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <div className="card form-card">
              <h2 className="heading-md mb-6">Send a Message</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="label">Full Name</label>
                  <input type="text" className="input-field" placeholder="Jane Doe" required />
                </div>
                
                <div className="form-group">
                  <label className="label">Email Address</label>
                  <input type="email" className="input-field" placeholder="jane@example.com" required />
                </div>
                
                <div className="form-group">
                  <label className="label">Service Required</label>
                  <select className="input-field">
                    <option>Custom Stitching</option>
                    <option>Bridal Wear</option>
                    <option>Blouse Design</option>
                    <option>Alterations</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="label">Your Message</label>
                  <textarea className="input-field" rows="4" placeholder="Tell us about your requirements..." required></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full mt-4">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
          
        </div>
        
        {/* Map Section */}
        <div className="map-section mt-12">
          <div className="card map-card">
            <div className="map-placeholder">
              <MapPin size={40} className="text-primary mb-4" />
              <h3>Interactive Map Integration</h3>
              <p>Google Maps iframe will be embedded here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
