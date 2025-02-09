import { useState } from "react";
import { data } from "../../../data"




const UseStateArray = () => {

const [arr,setArr]=useState(data)
const RemoveItem =(ID)=>{
  setArr(arr.filter((val)=>{
    return ID!==val.id
}))
}

return <>
  <h2>useState array example</h2>
  {
    arr.map((val)=><div key={val.id}>
      <p  >{val.name}</p> 
      <button className="btn" onClick={()=>RemoveItem(val.id)}>Clear</button>
    </div>)
  }
  <br/>
  <button className="btn" onClick={()=>setArr([])} >All Clear</button>
  </>

};

export default UseStateArray;
