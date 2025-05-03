import React, { useEffect, useState, createContext } from 'react';
import useApi from '../customHook/useApi';
import Loader from '../components/Loader';
import ActionData from './ActionData';
export const NameContext = createContext();

function AddData() {
  const { responseData, error, loading, trigger } = useApi();

  useEffect(() => {
    trigger('http://localhost:2005/api/user/me', 'GET');
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const name = responseData?.name || '';

  return (
    <NameContext.Provider value={name}>
      <p>{name}</p>
    </NameContext.Provider>
  );
}

export default AddData;
