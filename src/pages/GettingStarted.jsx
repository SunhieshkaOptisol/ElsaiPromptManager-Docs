import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const GettingStarted = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-gray-900">
          <FaHome className="w-4 h-4" />
        </Link>
        <span className="text-gray-400">/</span>
        <span>Getting Started</span>
      </div>

      {/* Main Content */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-8">Getting Started</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
           The Prompt Manager is a robust system for managing and optimizing AI prompts with version control, testing capabilities, and organizational management.
           This guide will help you get up and running quickly.
          </p>

          <p className="text-lg mb-8">
            The Prompt Manager brings structure, control, and efficiency to the process of managing AI prompts, making it an essential tool for organizations serious about their AI operations.
          </p>

          {/* <p className="text-gray-600 italic border-l-4 border-gray-200 pl-4">
            Ready to bring order to your AI ecosystem? Contact us to schedule a demonstration of how ElsaiARMS can 
            transform your AI governance and monitoring capabilities.
          </p> */}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center border-t pt-6">
        <Link 
          to="/introduction" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <span>«</span>
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-500">Previous</span>
            <span className="font-medium">Introduction</span>
          </div>
        </Link>

        <Link 
          to="/installation" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">Next</span>
            <span className="font-medium">Installation</span>
          </div>
          <span>»</span>
        </Link>
      </div>
    </div>
  );
};

export default GettingStarted;
