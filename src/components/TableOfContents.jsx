import React, { useState, useEffect } from 'react';

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0
      }
    );

    // Observe all section elements
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-24 ml-8 p-6">
      <h3 className="font-medium text-gray-900 mb-4">On This Page</h3>
      <nav className="space-y-2">
        {['overview', 'elsai-prompt-manager', 'key-features'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`block text-sm px-2 py-1 rounded hover:bg-gray-100 w-full text-left ${
              activeSection === section ? 'text-blue-600 bg-gray-100' : 'text-gray-600'
            }`}
          >
            {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
