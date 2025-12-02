import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Installation = () => {
  const [activeSection, setActiveSection] = useState('prerequisites');

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

    const sectionIds = ['prerequisites', 'installation-methods', 'sdk-version', 'saas-version'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => Boolean(el));

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 80; // account for fixed header
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetTop = elementTop - headerOffset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="relative flex gap-12">
      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-gray-900">
              <FaHome className="w-4 h-4" />
            </Link>
            <span className="text-gray-400">/</span>
            <span>Installation</span>
          </div>

          {/* Content Area */}
          <div className="prose max-w-none mb-16">
        <h1 className="text-4xl font-bold mb-8">Installation</h1>
        
        <p className="text-lg mb-8">
        Elsai Prompt Manager can be installed and used in two ways, depending on your requirements:
        <br />
        1. SDK Version – For developers who want to integrate Prompt Manager directly into their applications.
        <br />
        2. SaaS Version – For users who prefer a ready-to-use hosted platform without managing infrastructure.
        </p>

        <section id="prerequisites" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <p className="mb-4">Before installing , ensure you have:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Python 3.10, 3.11 and 3.12</li>
            <li>pip package manager</li>
            <li>Git (for GitHub installation method)</li>
          </ul>
        </section>

        <section id="installation-methods" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Installation Methods</h2>

          {/* SDK Version */}
          <div id="sdk-version" className="mb-10">
            <h3 className="text-xl font-bold mb-4">1. SDK Version</h3>
            
            <div id="sdk-package-installation" className="mb-8">
              <h4 className="text-lg font-semibold mb-4">1.1 Package Installation</h4>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
                  <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <h5 className="font-semibold text-gray-800">Installation Command</h5>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 m-0 overflow-x-auto">
                    <code>pip install --extra-index-url https://elsai-core-package.optisolbusiness.com/root/elsai-prompts-sass/ elsai-prompts==1.0.0</code>
                  </pre>
                </div>

              </div>
            </div>

            <div id="sdk-verify-installation" className="mb-8">
              <h4 className="text-lg font-semibold mb-4">1.2 Verify Installation</h4>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="mb-4">
                  To verify that the SDK is installed correctly, you can run a simple test:
                </p>
               
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <h5 className="font-semibold text-gray-800">Verification Command</h5>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 m-0 overflow-x-auto">
                    <code>{`python -c "from elsai_prompts.prompt_manager import PromptManager; print('Installation successful!')"`}</code>
                  </pre>
                </div>
                <p>
                  Kindly mail elsai.support@optisolbusiness.com if you face any issues with the installation.
                </p>
              </div>
            </div>
          </div>

          {/* SaaS Version */}
          <div id="saas-version" className="mb-10">
            <h3 className="text-xl font-bold mb-4">2. SaaS Version</h3>
            
            <div id="saas-package-installation" className="mb-8">
              <h4 className="text-lg font-semibold mb-4">2.1 Package Installation</h4>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="mb-4">
                  For the SaaS version, you can access the hosted platform directly at:{' '}
                  <a 
                    href="https://promptmanager.elsaifoundry.ai/" 
                    className="text-blue-600 hover:text-blue-800 break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   https://promptmanager.elsaifoundry.ai/
                  </a>
                </p>
                <p className="mb-4">No local installation is required - simply sign up and start using the platform.</p>
                
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
                  <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <h5 className="font-semibold text-gray-800">Installation Command</h5>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 m-0 overflow-x-auto">
                    <code>pip install --extra-index-url https://elsai-core-package.optisolbusiness.com/root/elsai-prompts-sass/ elsai-prompts==1.0.0</code>
                  </pre>
                </div>
              </div>
            </div>

            <div id="saas-verify-installation" className="mb-8">
              <h4 className="text-lg font-semibold mb-4">2.2 Verify Installation</h4>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="mb-4">
                  To verify SaaS access, simply log into the platform and access the application
                </p>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <h5 className="font-semibold text-gray-800">Verification Command</h5>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 m-0 overflow-x-auto">
                    <code>python -c "from elsai_prompts.prompt_manager import PromptManager; print('SaaS installation successful!')"</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>


          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center border-t pt-6">
            <Link 
              to="/getting-started" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <span>«</span>
              <div className="flex flex-col items-start">
                <span className="text-sm text-gray-500">Previous</span>
                <span className="font-medium">Getting Started</span>
              </div>
            </Link>

            <Link 
              to="/configuration" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-500">Next</span>
                <span className="font-medium">Configuration</span>
              </div>
              <span>»</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Navigation */}
      <div className="hidden lg:block w-64 fixed right-8 top-24">
        <nav className="space-y-1">
          <a 
            href="#prerequisites" 
            onClick={(e) => { e.preventDefault(); scrollToSection('prerequisites'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'prerequisites' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            Prerequisites
          </a>
          <a 
            href="#installation-methods" 
            onClick={(e) => { e.preventDefault(); scrollToSection('installation-methods'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'installation-methods' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            Installation Methods
          </a>
          <div className="ml-4">
            <a 
              href="#sdk-version" 
              onClick={(e) => { e.preventDefault(); scrollToSection('sdk-version'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'sdk-version' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              1. SDK
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
              2. SAAS
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Installation;
