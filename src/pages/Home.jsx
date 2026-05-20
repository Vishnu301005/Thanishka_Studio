import { ArrowRight, Star, Heart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const services = [
    { title: 'Custom Stitching', desc: 'Perfectly tailored outfits designed exclusively for your body type and preferences.', icon: '✂️' },
    { title: 'Bridal Wear', desc: 'Exquisite bridal lehengas, gowns, and sarees to make your special day unforgettable.', icon: '✨' },
    { title: 'Designer Blouses', desc: 'Trendy and elegant blouse designs that perfectly complement your sarees.', icon: '🧵' },
    { title: 'Alterations', desc: 'Precision alterations to give your existing wardrobe the perfect modern fit.', icon: '📏' }
  ];

  const testimonials = [
    { name: 'Priya Sharma', text: 'Thanishka transformed my dream bridal lehenga into reality. The fit was absolutely perfect!', rating: 5 },
    { name: 'Anita Desai', text: 'The designer blouse they stitched for my reception was stunning. Everyone kept asking where I got it.', rating: 5 },
    { name: 'Megha Patel', text: 'Highly professional and on-time delivery. Their attention to detail is just incredible.', rating: 5 }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Premium Ladies Tailor & Boutique</span>
            <h1 className="heading-xl mt-4 mb-4">Elegance Crafted <br/> Just For You</h1>
            <p className="text-body mb-8">
              Experience the luxury of perfect tailoring. From bespoke bridal wear to stylish daily outfits, we bring your fashion dreams to life.
            </p>
            <div className="hero-actions">
              <Link to="/designs" className="btn-primary">
                Explore Designs <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-decoration"></div>
            <img src="/images/hero.png" alt="Thanishka Boutique Interior" className="hero-image" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg">Our Premium Services</h2>
            <p className="text-body mt-4 max-w-2xl mx-auto">
              We offer a wide range of custom tailoring services, ensuring every stitch is perfect and every design is unique.
            </p>
          </div>
          
          <div className="grid-cols-4">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="card service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="section-padding">
        <div className="container">
          <div className="flex-between mb-8">
            <h2 className="heading-lg">Featured Collections</h2>
            <Link to="/designs" className="btn-outline hidden-mobile">View All</Link>
          </div>
          
          <div className="grid-cols-2">
            <motion.div 
              className="featured-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/images/bridal.png" alt="Bridal Wear" />
              <div className="featured-content">
                <h3>Bridal Masterpieces</h3>
                <Link to="/designs?category=bridal" className="link-arrow">Discover <ArrowRight size={16}/></Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="featured-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/images/blouse.png" alt="Designer Blouses" />
              <div className="featured-content">
                <h3>Designer Blouses</h3>
                <Link to="/designs?category=blouse" className="link-arrow">Discover <ArrowRight size={16}/></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Testimonials */}
      <section className="section-padding bg-secondary split-section">
        <div className="container">
          <div className="grid-cols-2 align-center">
            <div>
              <h2 className="heading-lg mb-4">Why Choose Thanishka?</h2>
              <ul className="benefits-list">
                <li><CheckCircle2 className="text-primary" /> <span>Expert designers with 10+ years of experience</span></li>
                <li><CheckCircle2 className="text-primary" /> <span>Premium quality fabrics and materials</span></li>
                <li><CheckCircle2 className="text-primary" /> <span>On-time delivery guaranteed</span></li>
                <li><CheckCircle2 className="text-primary" /> <span>Personalized consultation and fitting sessions</span></li>
              </ul>
            </div>
            
            <div className="testimonials-wrapper">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="testimonial-card">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, j) => <Star key={j} size={16} fill="var(--primary)" color="var(--primary)" />)}
                  </div>
                  <p>"{testimonial.text}"</p>
                  <h4>- {testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
