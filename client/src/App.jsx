import React from 'react'


function App() {

  fetch("http://localhost:3010/tyres").then((res) => {
   return res.json()
  }).then((data) => {
    console.log(data)
  })

  return (
    <div className="App">

      
    </div>
  );
}

export default App;
