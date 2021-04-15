import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import TyreDisplay from './components/TyreDisplay'


function App() {

  const [brands, setBrands] = useState('')

  useEffect(() => {
    // fetch brands from DB
    fetch('http://localhost:3010/brands').then((res) => {
      return res.json()
    })
    .then((brandsData) => {
        setBrands(brandsData)
    })

  }, [])
 

  return (
    <div className="App">
      <NavBar />
      
      {brands && <TyreDisplay brands={brands} />}
      
      
    </div>
  );
}

export default App;
