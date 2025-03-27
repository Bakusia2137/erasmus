import { useState } from "react";
import './NewUser.css';
import App from "./Header";
import Component from "./component";
import GuestImage from "./assets/guest.jpg"

function Counter() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [users, setUsers] = useState([]); 
  const [image, setImage] = useState(); 

  function addUser() {
      setUsers([...users, { name, age, country, image: image || GuestImage  }]);
      setName("");
      setAge("");
      setCountry("");
      setImage();
  }


  function emptyimage(e){
      setImage(e.target.value);
  }


    return (
      <div>
        <div className="forma">
          <div>
            <p>  NAME: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
            <p> AGE: <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /> </p> 
            <p>  COUNTRY: <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} /> </p> 
            <p>  IMG LINK: <input type="text" value={image} onChange={emptyimage} /> </p> 
              <button onClick={addUser}>ADD</button>
          </div>


        </div>

        <div className="">
              {users.map((user, index) => (
                  <Component key={index} name={user.name} age={user.age} country={user.country} src={user.image} />
              ))}
        </div> 

      
    </div>
      
  );

   
  
}
    
  
  
  export default Counter
  