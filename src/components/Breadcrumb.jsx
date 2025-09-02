import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname.split('/').filter(Boolean);
  
  return (
    <div className="flex items-center mb-6 text-sm">
      <Link to="/" className="text-gray-500 hover:text-gray-700">
        <FaHome className="w-4 h-4" aria-label="Home" />
      </Link>
      {path.map((item) => (
        <React.Fragment key={item.id}>
          <FaChevronRight className="w-3 h-3 mx-2 text-gray-400" aria-hidden="true" />
          <span className="capitalize">{item}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
