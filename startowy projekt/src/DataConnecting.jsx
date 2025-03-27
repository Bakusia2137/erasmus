import {useEffect, useState} from "react"
import './DataConnecting.css';

function DataConnecting() {

    const [titles, setTitles]=useState([]);

   
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(data=>{setTitles(data)})
        .catch(error=>{console.log(error,"error")});
    }, [])

 // bez tego ,[] strona za kazdym randomowym kliknieciem 
 // bedzie znowu to robila

 //  console.log(`${user.title}`);
 
 setTimeout(2000);
 return (
    <>

    <div className="left">
        {titles.map(
            title => (
                <p id="tytul" key={title.id}> {title.title}. </p>
            )
        )} 
    </div>
   
    </>
  )
}

export default DataConnecting
