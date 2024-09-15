import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Challenge' },
  { path: '/proposal', label: 'Proposal' },
  { path: '/technologies', label: 'Technologies' },
  { path: '/scientific-basis', label: 'Scientific Basis' },
  { path: '/advantages', label: 'Advantages' },
  { path: '/opportunity', label: 'Opportunity' },
  { path: '/budget', label: 'Budget' },
  { path: '/future', label: 'Future' },
];

function Navigation() {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex justify-center space-x-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;