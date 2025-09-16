import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Tutorial = () => {
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
            <span>Tutorial</span>
          </div>

          {/* Content Area */}
          <div className="prose max-w-none mb-16">
            <h1 className="text-4xl font-bold mb-8">Tutorial</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Usage Example for SDK version</h2>
              <p className="text-gray-600 mb-6">
                Learn how to integrate Elsai Prompt Manager with Azure OpenAI to create a complete AI workflow using elsai prompt sdk package
              </p>
              
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
                  <h5 className="font-semibold text-gray-800">Sample Code</h5>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 m-0 overflow-x-auto">
                  <code>{`from elsai_prompts.prompt_manager import PromptManager
from elsai_model.azure_openai import AzureOpenAIConnector

llm = AzureOpenAIConnector(
    azure_endpoint="https://your-azure-openai-endpoint.openai.azure.com/",
    openai_api_key="your-azure-openai-api-key",
    openai_api_version="2023-05-15",
    deployment_name="gpt-4o-mini",
    temperature=0.1
)

prompt_manager = PromptManager(
    api_key="YOUR-ELSAI-API-KEY",
    project_id="YOUR-ELSAI-PROJECT-ID"
    base_url="YOUR DEPLOYED URL"
)
prompt = prompt_manager.get_active_prompt_version(prompt_name="YOUR-PROMPT-NAME")

# Fill in variables, for example my prompt is "Extract items from {data}"

filled_prompt = prompt_template.format(data="Your data here") # Fill in your data

print("Final prompt:", filled_prompt) #Cross-check if your data has been added

messages = [
    {"role": "user", "content": filled_prompt}  
]

# Invoke LLM with the filled prompt
response = llm.invoke(messages=messages)
print("LLM response:", response)


response = llm.invoke(prompt)
print("LLM response:", response)`}</code>
                </pre>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Usage Example for Saas version</h2>
              <p className="text-gray-600 mb-6">
                To integrate Elsai Prompt Manager with Azure OpenAI to create a complete AI workflow using elsai prompt saas package
              </p>
              
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
                  <h5 className="font-semibold text-gray-800">Sample Code</h5>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 m-0 overflow-x-auto">
                  <code>{`from elsai_prompts.prompt_manager import PromptManager
from elsai_model.azure_openai import AzureOpenAIConnector

llm = AzureOpenAIConnector(
    azure_endpoint="https://your-azure-openai-endpoint.openai.azure.com/",
    openai_api_key="your-azure-openai-api-key",
    openai_api_version="2023-05-15",
    deployment_name="gpt-4o-mini",
    temperature=0.1
)

prompt_manager = PromptManager(
    api_key="YOUR-ELSAI-API-KEY",
    project_id="YOUR-ELSAI-PROJECT-ID",
)
prompt = prompt_manager.get_active_prompt_version(prompt_name="YOUR-PROMPT-NAME")

# Fill in variables, for example my prompt is "Extract items from {data}"

filled_prompt = prompt_template.format(data="Your data here") # Fill in your data

print("Final prompt:", filled_prompt) #Cross-check if your data has been added

messages = [
    {"role": "user", "content": filled_prompt}  
]

# Invoke LLM with the filled prompt
response = llm.invoke(messages=messages)
print("LLM response:", response)


response = llm.invoke(prompt)
print("LLM response:", response)`}</code>
                </pre>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
