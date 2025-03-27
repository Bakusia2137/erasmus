import Likes from './Likes';
import './Component.css';
import { useEffect, useState } from 'react';

function Component() {
  const [clicked, setClicked] = useState(false);
  const [accounts, setAccounts] = useState([]);

  
  const[likes, setLikes]=useState(0);

  useEffect(() => {
    fetch('/accounts.json')
      .then(response => response.json())
      .then(data => {
        setAccounts(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="essa">
        { (
          accounts.map((account, index) => (
           
           
           <div key={index}>
              <h1>name: {account.name}</h1>
              <img src={account.src} />
              
                <div className="likesDet">
                    <button  onClick={()=>{setLikes(likes+1)}}>Like+</button> 
                    <button  onClick={()=>{setLikes(likes-1)}}>Like-</button> 
                    <center> <h3>Likes: {account.likes}</h3> </center>


                    <button onClick={() => setClicked(!clicked)}>
                    {clicked ? "Hide" : "Details"}
                    </button>

                    {clicked && (
                    <>
                    <h1>age: {account.age}</h1>
                    <h1>country: {account.country}</h1>
                    </>
                    )}
                </div>

            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Component;
