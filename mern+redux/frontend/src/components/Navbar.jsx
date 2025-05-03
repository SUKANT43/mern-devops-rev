import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">My App</div>
        <div>
          <Link
            to="/"
            className="text-white mx-4 hover:text-gray-300"
          >
            Add Data
          </Link>
          <Link
            to="/action"
            className="text-white mx-4 hover:text-gray-300"
          >
            Action Data
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
