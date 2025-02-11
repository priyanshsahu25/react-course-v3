import React, { useState } from "react";
import data from './data'
import Card from "./Card";
const App = () => {
  const tempSet= new Set (data.map((card)=>card.category))
  const allctegories=["All",...tempSet]
  const [finalcategory,setFinalCategory]=useState("All")
 
return (

<>
<h1>Menu Cards</h1>
{
  allctegories.map((data)=><button key={data} onClick={()=>setFinalCategory(data)} style={{padding:"10px",marginLeft:"10px"}}>{data}</button>)
}

<div style={{display: "grid", 
  gridTemplateColumns: "repeat(3, 1fr)", 
  gap: "20px" }}>
{
  
  data.map((Carddata)=>{
    if (Carddata.category===finalcategory){
      return <Card 
    key={Carddata.id} 
    {...Carddata} 
    finalCategory={finalcategory}  
  />
    
    }
    
  })
}
</div>

</>
)
}
  

export default App;
