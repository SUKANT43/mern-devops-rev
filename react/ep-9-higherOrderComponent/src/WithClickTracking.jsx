import React, { useState } from 'react';

function WithClickTracking(Comp) {
  return function WrappedComponent(props) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <Comp {...props} />
        <button onClick={handleClick}>Click me</button>
        <p>You've clicked {count} times</p>
      </div>
    );
  };
}

export default WithClickTracking;
