import { useState } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Designs.css';

const MOCK_DESIGNS = [
  { id: 1, title: 'Red Bridal Lehenga', category: 'Bridal', image: '/images/bridal.png' },
  { id: 2, title: 'Gold Zari Blouse', category: 'Blouse', image: '/images/blouse.png' },
  { id: 3, title: 'Pastel Saree', category: 'Saree', image: '/images/hero.png' },
  { id: 4, title: 'Pink Reception Gown', category: 'Bridal', image: '/images/bridal.png' },
  { id: 5, title: 'Floral Party Wear', category: 'Party', image: '/images/hero.png' },
  { id: 6, title: 'Silk Designer Blouse', category: 'Blouse', image: '/images/blouse.png' },
];

const CATEGORIES = ['All', 'Bridal', 'Blouse', 'Saree', 'Lehenga', 'Party', 'Kids', 'Daily'];

const Designs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredDesigns = MOCK_DESIGNS.filter(design => {
    const matchesCategory = activeCategory === 'All' || design.category === activeCategory;
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="designs-page">
      <div className="page-header">
        <div className="container">
          <h1 className="heading-xl text-center">Design Gallery</h1>
          <p className="text-body text-center mt-4">Explore our exclusive collection of custom tailored masterpieces.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="filters-bar">
          <div className="search-box">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search designs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          
          <div className="categories-scroll">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="designs-grid">
          <AnimatePresence>
            {filteredDesigns.map(design => (
              <motion.div 
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="design-card"
                onClick={() => setSelectedImage(design)}
              >
                <div className="design-image-wrapper">
                  <img src={design.image} alt={design.title} />
                  <div className="design-overlay">
                    <span>View Detail</span>
                  </div>
                </div>
                <div className="design-info">
                  <h3>{design.title}</h3>
                  <span className="design-category">{design.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredDesigns.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-body">No designs found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Lightbox / Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}></div>
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
            >
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                <X size={24} />
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h2>{selectedImage.title}</h2>
                <p>Category: {selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Designs;
