import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isGettingStartedOpen, setIsGettingStartedOpen] = useState(false);
  

  const navigation = [
    {
      title: 'Introduction',
      href: '/introduction',
      isExpandable: false
    },
    {
      title: 'Getting Started',
      isExpandable: true,
      items: [
        { title: 'Installation ', href: '/installation' },
        { title: 'Configuration', href: '/configuration' }      ]
    },
    {
      title: 'User Guide',
      href: '/user-guide',
      isExpandable: false
    },
    {
      title: 'Tutorial',
      href: '/tutorial',
      isExpandable: false
    },
    {
      title: 'Conceptual Guide',
      href: '/conceptual-guide',
      isExpandable: false
    }
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-16 overflow-y-auto">
      <nav className="p-4 space-y-1">
        {navigation.map((item, index) => (
          <div key={index} className="py-1">
            {item.isExpandable ? (
              <div>
                <button
                  onClick={() => setIsGettingStartedOpen(!isGettingStartedOpen)}
                  className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  style={{ color: '#4B5563 !important' }}
                >
                  <span style={{ color: '#4B5563 !important' }}>{item.title}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isGettingStartedOpen ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: '#4B5563 !important' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isGettingStartedOpen && (
                  <ul className="mt-1 ml-4 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subItem.href}
                          className={({ isActive }) =>
                            `block py-2 px-3 text-sm text-gray-600 hover:bg-gray-100 rounded-md ${
                              isActive ? 'bg-gray-100' : ''
                            }`
                          }
                        >
                          {subItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `block py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md ${
                    isActive ? 'bg-gray-100' : ''
                  }`
                }
              >
                {item.title}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
