import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
        <p className="text-lg mb-6">Sorry, the page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
