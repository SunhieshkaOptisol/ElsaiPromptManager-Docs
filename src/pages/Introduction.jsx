import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  const [activeSection, setActiveSection] = useState('overview');

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
        rootMargin: '-100px 0px -60% 0px'
      }
    );

    const sectionIds = ['overview', 'elsai-prompt-manager', 'key-features'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => Boolean(el));

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 80;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetTop = elementTop - headerOffset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="relative flex gap-12">
      <div className="flex-1">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Introduction</h1>
          
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Elsai Prompt Manager</strong> is a comprehensive platform designed for AI teams to create, manage, test, and optimize their AI prompts. 
              It provides a centralized solution for prompt engineering, version control, and team collaboration, making it easier to maintain consistency and quality in AI interactions across projects.
            </p>
          </section>

          <section id="elsai-prompt-manager" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Elsai Prompt Manager</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Prompt Manager is a powerful tool for organizing, versioning, and optimizing your AI prompts. 
              It helps maintain consistency across your applications while providing valuable insights into prompt 
              performance and effectiveness. With features like version control and A/B testing, you can continuously 
              improve your prompts based on real-world usage data.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Elsai Prompt Manager is built with a modern tech stack, combining a FastAPI backend with a React 
              frontend, offering a seamless and intuitive interface for managing AI prompts. The platform is 
              designed to integrate easily with existing AI workflows and supports multiple AI providers through 
              its API key management system.
            </p>
          </section>

          <section id="key-features" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">Faster Iteration</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">Automatic Optimization</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">Seamless Testing</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">Collaboration</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">Versioning & Tracking</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">Governance & Access Control</h3>
              </div>
            </div>
          </section>

          <div className="mt-16 border-t pt-8 flex justify-end">
            <Link 
              to="/getting-started" 
              className="inline-flex items-center gap-3 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              <span>Next:</span>
              <span className="font-semibold">Getting Started »</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Navigation */}
      <div className="hidden lg:block w-64 fixed right-8 top-24">
        <nav className="space-y-1">
          <a 
            href="#overview" 
            onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'overview' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            Overview
          </a>
          <a 
            href="#elsai-prompt-manager" 
            onClick={(e) => { e.preventDefault(); scrollToSection('elsai-prompt-manager'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'elsai-prompt-manager' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            Elsai Prompt Manager
          </a>
          <a 
            href="#key-features" 
            onClick={(e) => { e.preventDefault(); scrollToSection('key-features'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'key-features' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            Key Features
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Introduction;
