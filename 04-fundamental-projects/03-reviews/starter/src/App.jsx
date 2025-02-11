import { useState } from 'react';
import data from './data'


const App = () => {
  // const [arr,setArr]=useState(data)
  const [idx,setIdx]=useState(1)
return <>

  <h2>Reviews Starter</h2>
  <div style={{width:"600px",height:"300px",backgroundColor:"grey"}}>
  <div key={data[idx].id}>
    <img src={data[idx].image} style={{width:"200px",height:"200px", borderRadius:"50%"}}/>
    <p>Name:{data[idx].name}</p>
    <p>Job: {data[idx].job}</p>
    <p>About:{data[idx].text}</p>

   
    <button onClick={()=>setIdx((prevIdx)=>{
      const newIdx=prevIdx-1
      return newIdx?data.length:newIdx
    })}>Previous</button>



    <button onClick={()=>setIdx((prevIdx)=>{
      console.log("Idx is",prevIdx)
      return (prevIdx +1)%data.length
    })}>Next</button>
  </div>

  <button onClick={()=>setIdx(()=>{
    const newIdx=Math.floor(Math.random() * 4) + 1
    console.log("NewIdx",newIdx)
    return newIdx
  })}>Random</button>
  </div>
  </>
};
export default App;
