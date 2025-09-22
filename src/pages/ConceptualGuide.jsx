import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ConceptualGuide = () => {
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

    const sectionIds = ['overview', 'features'];
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
          <h1 className="text-4xl font-bold mb-8">Conceptual Guide</h1>
          
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About Elsai Prompt Manager</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Elsai Prompt Manager is a comprehensive platform designed to streamline and optimize the management of AI prompts 
              across your organization. It provides a centralized solution for creating, testing, versioning, and deploying 
              prompts with enterprise-grade security and collaboration features.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you're a developer integrating prompts into applications or a team lead managing prompt workflows, 
              Elsai Prompt Manager offers the tools and infrastructure needed to ensure consistent, high-quality AI interactions 
              while maintaining security and governance standards.
            </p>
          </section>
          
          <section id="features" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Faster Iteration</h3>
                <p className="text-gray-600">
                  Accelerate your prompt development workflow with rapid creation, refinement, and experimentation capabilities. 
                  The platform provides intuitive tools that allow you to quickly iterate on prompt designs, test variations, 
                  and optimize performance without the overhead of traditional development cycles. Streamline your workflow 
                  with real-time editing, instant previews, and efficient version management.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Automatic Optimization</h3>
                <p className="text-gray-600">
                  Leverage intelligent algorithms that automatically tune and optimize your prompts for enhanced performance. 
                  The system analyzes response patterns, identifies improvement opportunities, and applies smart adjustments 
                  to ensure consistent, high-quality outputs. Benefit from machine learning-driven suggestions that help 
                  refine prompt structure, improve clarity, and maximize effectiveness across different use cases.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Seamless Testing</h3>
                <p className="text-gray-600">
                  Execute comprehensive prompt testing with immediate feedback and detailed analytics. Test your prompts 
                  against various inputs, edge cases, and real-world scenarios to ensure reliability and performance. 
                  Get instant results with detailed metrics including response quality, consistency scores, and performance 
                  benchmarks. Validate prompt effectiveness before deployment with our integrated testing framework.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Collaboration</h3>
                <p className="text-gray-600">
                  Foster team collaboration with shared workspaces, template libraries, and standardized workflows. 
                  Enable multiple team members to contribute to prompt development, share best practices, and maintain 
                  consistency across projects. Built-in review processes, commenting systems, and approval workflows 
                  ensure quality control while promoting knowledge sharing and team productivity.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Versioning & Tracking</h3>
                <p className="text-gray-600">
                  Maintain complete control over prompt evolution with comprehensive version control and performance tracking. 
                  Track every change, compare versions side-by-side, and analyze performance improvements over time. 
                  Roll back to previous versions instantly when needed, and maintain detailed audit trails for compliance 
                  and debugging purposes. Monitor prompt performance metrics and identify optimization opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Governance & Access Control</h3>
                <p className="text-gray-600">
                  Implement enterprise-grade security and governance with granular access controls and role-based permissions. 
                  Define user roles, set access levels, and ensure secure prompt management across your organization. 
                  Maintain compliance with industry standards through audit logging, approval workflows, and secure 
                  data handling. Protect sensitive prompt content while enabling appropriate team access and collaboration.
                </p>
              </div>
            </div>
          </section>
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
            About Elsai Prompt Manager
          </a>
          <a 
            href="#features" 
            onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'features' 
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

export default ConceptualGuide; 