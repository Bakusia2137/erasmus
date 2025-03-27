import {useEffect, useState} from "react"
import './DataConnecting.css';

function DataConnecting() {

    const [users, setUsers]=useState([]);
    const [error, setError]=useState([]);
    const [loading, setIsLoading]=useState([]);


   
    useEffect(() =>{

        async function fetchUsers(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("error");
                }
                const data=await response.json();
                setUsers(data);
            } catch(error){
                setError(error.message)
            } finally{
                setIsLoading(false);
            }
        }
        fetchUsers();
    }, [])


 return (
    <>

        <div className="right">
        {loading && <p>Loading...</p> }

        {users.map(
            user => (
                <p key={user.id}>{user.id}. {user.name}. </p>
            )
        )} 

        {error && <p>{error}</p>}

        </div>
    </>
  )
}

export default DataConnecting
