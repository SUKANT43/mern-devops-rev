import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useMemo } from 'react'
function App() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles =useMemo(()=>{
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  },[dark])

  const doubleNum = useMemo(()=>{
    return slowFunction(Number(num))
  },[num]);

useEffect(()=>{
    console.log("Theme changed");
  },[themeStyles])

  console.log(themeStyles.color);
  console.log("rendered");

  return (
    <div>
      <input type="number" value={num} onChange={e => setNum(e.target.value)} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <div style={themeStyles}>{doubleNum}</div>
    </div>
  )
}

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default App;



// function App() {
//   const [num, setNum] = useState(0);
//   const [dark, setDark] = useState(false);

//   const themeStyles = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   };

//   const doubleNum = slowFunction(Number(num));

//   console.log(themeStyles.color);

//   return (
//     <div>
//       <input type="number" value={num} onChange={e => setNum(e.target.value)} />
//       <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
//       <div style={themeStyles}>{doubleNum}</div>
//     </div>
//   )
// }

// function slowFunction(num) {
//   for (let i = 0; i < 1000000000; i++) {}
//   return num * 2;
// }

// export default App;
//in the above code the slowFunction is called every time the component re-renders, which can be inefficient. this may see by the toogle and change color of the theme.
//useMemo is used to memorize the result of a function it dose not re-render the function if the value is not changed.

// const doubleNum = useMemo(()=>{
//   return slowFunction(Number(num))
// },[num]);--> now this is well optimized and only re-renders when the num value is changed.



// const themeStyles =useMemo(()=>{
//   return {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   }
// },[dark])

// const doubleNum = useMemo(()=>{
//   return slowFunction(Number(num))
// },[num]);

// useEffect(()=>{
//   console.log("Theme changed");
// },[themeStyles]) this memo hook memorizr the vlue so it is not re-rendered every time if the value is change means the page is rerenderes


//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
// useEffect(()=>{
//   console.log("Theme changed");
// }-->if the object is not in the useMemo it rerender every time