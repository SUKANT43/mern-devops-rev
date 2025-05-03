import React, { useState, useEffect } from 'react'

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(10));
    console.log("set items")
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
}

export default List;
