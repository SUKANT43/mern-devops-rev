import React, { useEffect } from 'react';
import useApi from '../customHook/useApi';
import Loader from '../components/Loader';

function ActionData() {
  const {
    responseData: userData,
    error: userError,
    loading: userLoading,
    trigger: triggerUser
  } = useApi();

  const {
    responseData: dataList,
    error: dataError,
    loading: dataLoading,
    trigger: triggerData
  } = useApi();

  useEffect(() => {
    triggerUser('http://localhost:2005/api/user/me', 'GET');
    triggerData('http://localhost:2005/api/data', 'GET');
  }, []);

  if (userLoading || dataLoading) return <Loader />;
  if (userError) return <div className="text-red-600">Error (User): {userError}</div>;
  if (dataError) return <div className="text-red-600">Error (Data): {dataError}</div>;

  const name = userData?.name || '';
  const dataItems = Array.isArray(dataList) ? dataList : [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Welcome, {name}
      </h1>

      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Data List</h2>
      <div className="grid gap-4 max-w-2xl mx-auto">
        {dataItems.length === 0 ? (
          <p className="text-center text-gray-600">No data found.</p>
        ) : (
          dataItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ActionData;
