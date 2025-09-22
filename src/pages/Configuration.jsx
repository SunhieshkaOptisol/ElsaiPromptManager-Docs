import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Configuration = () => {
  const [activeSection, setActiveSection] = useState('environment-setup');

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

    const sectionIds = [
      'environment-setup',
      'required-configuration',
      'configuration-details',
      'sdk-version',
      'saas-version'
    ];
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-gray-900">
              <FaHome className="w-4 h-4" />
            </Link>
            <span className="text-gray-400">/</span>
            <span>Configuration</span>
          </div>

          {/* Content Area */}
          <div className="prose max-w-none mb-16">
            <h1 className="text-4xl font-bold mb-8">Configuration</h1>
            <p className="text-lg text-gray-700 mb-6">
              Configuration setup for ElsaiPromptManger. The elsai_prompt_manager package requires minimal setup to get started.
            </p>
            
            <section id="environment-setup" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Environment Setup</h2>
              <p className="text-lg text-gray-700 mb-6">
                Configuration is handled via environment variables using a .env file. These variables are loaded automatically when the application starts.
              </p>
              
              <div id="required-configuration" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Required Configuration</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Before using elsai_prompt_manager you need to set up a .env file in your project root directory with the following variables:
                </p>
                
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                  <div className="text-white font-mono text-sm">
                    <div>ELSAI_PROMPT_API_KEY="YOUR API KEY"</div>
                    <div>PROJECT_ID="YOUR PROJECT ID"</div>
                    <div>PROMPT_MANAGER_API_URL="YOUR DEPLOYED URL" (only for SDK version)</div>
                  </div>
                </div>
              </div>
              
              <div id="configuration-details" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Configuration Details</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">ElsaiPromptAPIKey</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Purpose:</strong> Authenticates your application with ElsaiPromptManager services</li>
                    <li><strong>Format:</strong> String token provided during account setup</li>
                    <li><strong>Example:</strong> ELSAI_PROMPT_API_KEY=elsai_123456789abcd</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Prompt Manager URL</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Purpose:</strong> Helps you host the application in your server</li>
                    <li><strong>Format:</strong> String token provided during account setup</li>
                    <li><strong>Example:</strong> PROMPT_MANAGER_API_URL= http://promptmanager.elsaifoundry.ai</li>
                    <li>Only needed for SDK version</li>
                  </ul>
                </div>
                                
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Project ID</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Purpose:</strong> Navigates to the project from which the prompts have to be fetched</li>
                    <li><strong>Format:</strong> String token provided during creation of project</li>
                    <li><strong>Example:</strong> PROJECT_ID=xyz1234</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section id="sdk-version" className="mb-12">
              <h3 className="text-xl font-bold mb-4">1. For SDK version</h3>
              <div id="sdk-required-configuration" className="mb-8">
                <h4 className="text-lg font-semibold mb-3">1.1 Required Configuration</h4>
                
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                  <div className="text-white font-mono text-sm">
                    <div>ELSAI_PROMPT_API_KEY="YOUR API KEY"</div>
                    <div>PROJECT_ID="YOUR PROJECT ID"</div>
                    <div>PROMPT_MANAGER_API_URL="YOUR DEPLOYED URL"</div>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="saas-version" className="mb-12">
              <h3 className="text-xl font-bold mb-4">2. For SaaS version</h3>
              <div id="saas-required-configuration" className="mb-8">
                <h4 className="text-lg font-semibold mb-3">2.1 Required Configuration</h4>
                
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                  <div className="text-white font-mono text-sm">
                    <div>ELSAI_PROMPT_API_KEY="YOUR API KEY"</div>
                    <div>PROJECT_ID="YOUR PROJECT ID"</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Right Side Navigation */}
      <div className="hidden lg:block w-64 fixed right-8 top-24">
        <nav className="space-y-1">
          <a 
            href="#environment-setup" 
            onClick={(e) => { e.preventDefault(); scrollToSection('environment-setup'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'environment-setup' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            Environment Setup
          </a>
          <div className="ml-4">
            <a 
              href="#required-configuration" 
              onClick={(e) => { e.preventDefault(); scrollToSection('required-configuration'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'required-configuration' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Required Configuration
            </a>
            <a 
              href="#configuration-details" 
              onClick={(e) => { e.preventDefault(); scrollToSection('configuration-details'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'configuration-details' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Configuration Details
            </a>
          </div>
          <a 
            href="#sdk-version" 
            onClick={(e) => { e.preventDefault(); scrollToSection('sdk-version'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'sdk-version' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            1. SDK Version
          </a>
          <a 
            href="#saas-version" 
            onClick={(e) => { e.preventDefault(); scrollToSection('saas-version'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'saas-version' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            2. SaaS Version
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Configuration;
