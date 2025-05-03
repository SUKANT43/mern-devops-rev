import React, { useContext, useEffect } from 'react';
import { NameContext } from './AddData'; 
import useApi from '../customHook/useApi';
import Loader from '../components/Loader';
function ActionData() {
const{ responseData, error, loading, trigger } = useApi();
useEffect(() => {
  trigger('http://localhost:2005/api/user/me', 'GET');
}, []);


if (loading) return <Loader />;
if (error) return <div>Error: {error}</div>;
const name = responseData?.name || '';
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default ActionData;
