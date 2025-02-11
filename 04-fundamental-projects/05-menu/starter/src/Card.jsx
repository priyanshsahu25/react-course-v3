import React from "react"

const Card= ({title,price,img,desc,category,finalCategory})=>{
    console.log(category,"Final:",finalCategory)
return(
    <>
    {
        finalCategory===category?(
        <div style={{height:"400px",width:"150px"}}>
        <img src={img} style={{height:"200px",width:"200px"}}/><br/>
        <h3>{title}</h3>  <p> {price}</p> 
        <p>{desc}</p>
      </div> ):<p></p>
    }
    
    </>
       

) 


}

export default Card
