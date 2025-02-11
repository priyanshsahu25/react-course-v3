import { useEffect, useState } from "react";

const url = 'https://www.course-api.com/react-tabs-project';


const App = () => {
  const [data,setData]=useState([])
  const [titles,setTitles]=useState([])
  const [showTitle,setTitle]=useState({})

  useEffect(()=>{
    async function fetchData (){
      const res= await fetch(url)
      const newData=await res.json()
       setData(newData)
       let Newset=new Set(newData.map((val)=>{return val.title}))
       setTitles([...Newset])
    }
    fetchData()
  },[])
  
 
  return(
    <>
    {
  titles.map((val) => (
    <button 
      onClick={() => {
        const selectedObject = data.find((newVal) => newVal.title === val);
        setTitle(selectedObject || {}); // Ensure it's an object, not undefined
        console.log(selectedObject); // Debugging: Check if the correct object is logged
      }}  
      style={{ padding: "10px", margin: "5px" }} 
      key={val}
    >
      {val}
    </button>
  ))
}

   {
    <h1>{showTitle.title}</h1>
   }
    
    </>
  )
};
export default App;
