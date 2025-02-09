import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [fname,setName]=useState("")
  const [femail,setEmail]=useState("")
  const [arr,setArr]=useState(data)
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log(fname,femail);
    setArr((prevState)=>[...prevState,{id:Date.now(),name:fname}])

  }
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={fname} onChange={(e)=>setName(e.target.value)} />
          <label htmlFor='email' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='email' value={femail} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {
        arr.map((val)=>{
          const {id,name}=val
          return (
            <div key={id}>
              <p>Name: {name}</p>
              <button onClick={() => setArr(prevArr => prevArr.filter(val => val.id !== id))}>
              Remove</button>
            </div>
          )
        })

      }
    </div>
  );
};
export default UserChallenge;
