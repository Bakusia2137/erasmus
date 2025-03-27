//pierwsza litera zawsze musi byc duza
import './App.css';
import Component from "./component"
import Header from "./Header"
import NewUser from "./NewUser"
import Foott from "./Foott"
import DataConnecting from "./DataConnecting"
import DataCon2 from "./DataCon2"


function App() {
 

  return (
    <>
    <Header/>
    <DataConnecting/>
    <DataCon2/>

    <NewUser/>

    <Component />

    <Foott/>
    </>
  )
}

export default App
