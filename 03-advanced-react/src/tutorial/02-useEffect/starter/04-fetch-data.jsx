import { useState,useEffect } from "react";

const url = 'https://api.github.com/users';


const FetchData = () => {

const [data,SetData] =useState([])  
useEffect (()=>{
const fetchData=async ()=>{
  let res= await fetch (url)
  
  SetData(await res.json())
}
fetchData()
},[])

  return <>
  <h2>fetch data example</h2>;
  {
    data.map((val)=>{
      const {id,avatar_url,login,url}=val
      return (
        <div style={{ display: "flex", gap: "20px" }}>
        <div 
          key={id} 
          style={{ 
            height: "auto", 
            width: "150px", 
            backgroundColor: "red", 
            color: "white", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "10px", 
            borderRadius: "8px", 
            textAlign: "center"
          }}
        >
          <p style={{ margin: "5px 0", fontWeight: "bold" }}>Name: {login}</p>
          <img 
            src={avatar_url} 
            alt={login} 
            style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
          />
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              marginTop: "5px", 
              color: "yellow", 
              textDecoration: "none", 
              fontWeight: "bold"
            }}
          >
            GitHub Link
          </a>
        </div>
      </div>
      
      )
    })
  }
  
  </>
};
export default FetchData;
