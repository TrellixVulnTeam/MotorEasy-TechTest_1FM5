import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import TyreCard from './components/TyreCard'


function App() {

  const [tyres, setTyres] = useState('')

  useEffect(() => {

    fetch("http://localhost:3010/tyres").then((res) => {
      return res.json()
     }).then((data) => {
       setTyres(data)
       console.log(data)
     })
      
    
  }, [])

 

  return (
    <div className="App">
      <NavBar />
          
      {tyres && tyres.map((tyre) => {
          return <TyreCard tyre = {tyre} />
        })
      }
    
      
    </div>
  );
}

export default App;
