import React, { useEffect, useRef } from 'react';
import useApi from '../customHook/useApi';
import Loader from '../components/Loader';

function AddData() {
  const { responseData, error, loading, trigger } = useApi();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    trigger('http://localhost:2005/api/user/me', 'GET');
  }, []);

  const handleClick = async () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const data = { title, description };
    await trigger('http://localhost:2005/api/data', 'POST', data);
  };

  if (loading) return <Loader />;
  if (error) return <div className="text-red-600 text-center mt-4">Error: {error}</div>;

  const name = responseData?.name || '';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome, {name}</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your title"
            ref={titleRef}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Enter your description"
            ref={descriptionRef}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

          <button
            type="submit"
            onClick={handleClick}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddData;
