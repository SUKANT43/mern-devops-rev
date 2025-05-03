import React, { useState ,useCallback} from 'react'
import List from './List';
function App() {
  const[num,setNum]=useState(0);
  const [dark,setDar]=useState(false);

  const getItems=useCallback((inc)=>{
    return [num+1+inc,num+2+inc,num+3+inc]
  
  }, [num])

  const theme={
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div style={theme}> 
    <input type="number" value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
    <button onClick={()=>setDar(!dark)}>Toggle Theme</button>
    <List getItems={getItems}/>
    </div>
  )
}

export default  App


//use callback also same as the use memo but it return the whole function
//use memo return the value of the function if insted i used useMemo i just call getItems
//if i need to pass a number for getItems(10) and i need to add this in num arr but this not happens in the useMemo