import { useState } from "react";


function Counter() {

    const[count, setCount]=useState(0);
    const[name, setName]=useState("");
    const[lname, setLname]=useState("");


    function minus(){
        if (count>0){
            setCount(count-1);
        } 
    }


    function alertf(){
        alert(name+"  "+lname);
    }


    return (
      <>
      <button onClick={()=>{setCount(count+1)}}>KLIK +</button>
      <button onClick={minus}>KLIK -</button>
      <p>{count}</p>

<br></br>
<br></br>


      NAME <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br></br>
      LAST NAME <input type="text" value={lname}  onChange={(e)=>{setLname(e.target.value)}} /> <br></br>
      
      <button onClick={alertf}>ALERT</button>

   
  
      </>
    )
  }
  
  export default Counter
  