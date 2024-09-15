import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          VR Surgery Training
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/proposal" className="hover:text-blue-200">Proposal</Link></li>
            <li><Link to="/budget" className="hover:text-blue-200">Budget</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;