import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const UserGuide = () => {
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

    const sectionIds = [
      'overview',
      'functionalities',
      'import',
      'initialization',
      'retrieving-prompts',
      'custom-headers',
      'error-handling',
      'best-practices',
      'common-use-cases'
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
            <span>User Guide</span>
          </div>

          {/* Content Area */}
          <div className="prose max-w-none mb-16">
            <h1 className="text-4xl font-bold mb-8">Elsai Prompt Manager Guide</h1>

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 mb-6">
                Elsai Prompt Manager is a Python package that allows you to manage and retrieve prompts from your organization's centralized repository. It provides seamless access to version-controlled prompts across different projects.
              </p>
            </section>

            <section id="functionalities" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Functionalities</h2>
              <p className="text-gray-600 mb-6">
                Follow the steps below to use Elsai Prompt Manager in your project.
              </p>

              <div id="import" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Import</h3>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-gray-100"><code>from elsai_prompts.prompt_manager import PromptManager</code></pre>
                </div>
              </div>

              <div id="initialization" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Initialization</h3>
                <div> For SDK version:  </div>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-gray-100"><code>{`prompt = PromptManager(
    api_key="YOUR-ELSAI-API-KEY",
    project_id="YOUR-ELSAI-PROJECT-ID"
    base_url="YOUR DEPLOYED URL"
)`}</code></pre>
                </div>
                <div> For Saas version:  </div>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-gray-100"><code>{`prompt = PromptManager(
    api_key="YOUR-ELSAI-API-KEY",
    project_id="YOUR-ELSAI-PROJECT-ID"
)`}</code></pre>
                </div>
                <p className="text-gray-600 mb-4">This sets up the prompt management environment for your project. It will:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                  <li>Validate your API credentials</li>
                  <li>Connect to your organization's prompt repository</li>
                  <li>Enable access to project-specific prompts</li>
                </ul>
              </div>

              <div id="retrieving-prompts" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Retrieving Prompts</h3>
                <p className="text-gray-600 mb-4">To retrieve the active version of a prompt from your project:</p>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-gray-100"><code>response = prompt.get_active_prompt_version(prompt_name="YOUR-PROMPT-NAME")</code></pre>
                </div>
                <p className="text-gray-600 mb-4">Complete usage example:</p>
                <div>For SDK version:</div>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-gray-100"><code>{`from elsai_prompts.prompt_manager import PromptManager
prompt = PromptManager(
    api_key="YOUR-ELSAI-API-KEY",
    project_id="YOUR-ELSAI-PROJECT-ID",
    base_url="YOUR DEPLOYED URL"
)
response = prompt.get_active_prompt_version(prompt_name="YOUR-PROMPT-NAME")
print(response)`}</code></pre>
                </div>
                <div> For Saas version:  </div>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-gray-100"><code>{`from elsai_prompts.prompt_manager import PromptManager
prompt = PromptManager(
    api_key="YOUR-ELSAI-API-KEY",
    project_id="YOUR-ELSAI-PROJECT-ID"
    )
response = prompt.get_active_prompt_version(prompt_name="YOUR-PROMPT-NAME")
print(response)`}</code></pre>
                </div>
                <p className="text-gray-600 mb-4">Information returned for each prompt:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                  <li>Active prompt version content</li>
                  <li>Associated metadata</li>
                  <li>Project context</li>
                </ul>
              </div>

              <div id="custom-headers" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Using Custom Headers</h3>
                <p className="text-gray-600 mb-4">To include custom headers with your requests:</p>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-gray-100"><code>{`headers = {
    "Custom-Header": "value"
}
response = prompt.get_active_prompt_version(
    prompt_name="prompt_name",
    headers=headers
)`}</code></pre>
                </div>
              </div>

              <div id="error-handling" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Error Handling</h3>
                <p className="text-gray-600 mb-4">The package provides comprehensive error handling for various scenarios:</p>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-gray-100"><code>{`try:
    response = prompt.get_active_prompt_version("prompt_name")
except requests.exceptions.RequestException as e:
    print(f"Network or API error: {e}")
except KeyError as e:
    print(f"Response parsing error: {e}")`}</code></pre>
                </div>
              </div>

              <div id="best-practices" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Best Practices</h3>
                
                <h4 className="text-lg font-semibold mb-4">Environment Variables</h4>
                <p className="text-gray-600 mb-4">Use environment variables for secure credential management:</p>
                <div> For SDK version:</div>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-gray-100"><code>{`import os
from dotenv import load_dotenv

load_dotenv()

prompt = PromptManager(
    api_key=os.getenv("ELSAI_API_KEY"),
    project_id=os.getenv("ELSAI_PROJECT_ID"),
    base_url=os.getenv("PROMPT_MANAGER_API_URL")
)`}</code></pre>
                </div>
                <div> For Saas version:</div>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-gray-100"><code>{`import os
from dotenv import load_dotenv

load_dotenv()

prompt = PromptManager(
    api_key=os.getenv("ELSAI_API_KEY"),
    project_id=os.getenv("ELSAI_PROJECT_ID")
)`}</code></pre>
                </div>

                
              </div>

              <div id="common-use-cases" className="mb-8">
                <h3 className="text-xl font-bold mb-4">Common Use Cases</h3>

                <h4 className="text-lg font-semibold mb-4">Basic Prompt Retrieval</h4>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-gray-100"><code>{`# Get a simple prompt
response = prompt.get_active_prompt_version("welcome_message")`}</code></pre>
                </div>

                <h4 className="text-lg font-semibold mb-4">Error-Handled Retrieval</h4>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-gray-100"><code>{`def safe_get_prompt(prompt_name):
    try:
        return prompt.get_active_prompt_version(prompt_name)
    except requests.exceptions.RequestException:
        return "Default fallback prompt"`}</code></pre>
                </div>

                <h4 className="text-lg font-semibold mb-4">Batch Prompt Retrieval</h4>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <pre className="text-gray-100"><code>{`def get_multiple_prompts(prompt_names):
    prompts = {}
    for name in prompt_names:
        try:
            prompts[name] = prompt.get_active_prompt_version(name)
        except Exception as e:
            print(f"Error retrieving {name}: {e}")
    return prompts`}</code></pre>
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
            href="#functionalities" 
            onClick={(e) => { e.preventDefault(); scrollToSection('functionalities'); }}
            className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
              activeSection === 'functionalities' 
                ? 'border-blue-600 text-blue-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
          >
            Functionalities
          </a>
          <div className="ml-4 space-y-1">
            <a 
              href="#import" 
              onClick={(e) => { e.preventDefault(); scrollToSection('import'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'import' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Import
            </a>
            <a 
              href="#initialization" 
              onClick={(e) => { e.preventDefault(); scrollToSection('initialization'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'initialization' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Initialization
            </a>
            <a 
              href="#retrieving-prompts" 
              onClick={(e) => { e.preventDefault(); scrollToSection('retrieving-prompts'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'retrieving-prompts' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Retrieving Prompts
            </a>
            <a 
              href="#custom-headers" 
              onClick={(e) => { e.preventDefault(); scrollToSection('custom-headers'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'custom-headers' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Custom Headers
            </a>
            <a 
              href="#error-handling" 
              onClick={(e) => { e.preventDefault(); scrollToSection('error-handling'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'error-handling' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Error Handling
            </a>
            <a 
              href="#best-practices" 
              onClick={(e) => { e.preventDefault(); scrollToSection('best-practices'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'best-practices' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Best Practices
            </a>
            <a 
              href="#common-use-cases" 
              onClick={(e) => { e.preventDefault(); scrollToSection('common-use-cases'); }}
              className={`block py-1 pl-4 border-l-2 hover:text-blue-600 transition-colors duration-200 ${
                activeSection === 'common-use-cases' 
                  ? 'border-blue-600 text-blue-600 font-medium' 
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              Common Use Cases
            </a>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default UserGuide;
