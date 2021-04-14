import React, { useEffect, useState } from 'react'
import TyreCard from '../TyreCard'
import { Container, Grid } from '@material-ui/core'

const TyreDisplay = () => {

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

        <Container>
          <Grid container>
            {tyres && tyres.map((tyre) => {
                return (
                  <Grid item xs={4} > 
                    <TyreCard tyre = {tyre} />
                  </Grid>
                )
              })
            }
          </Grid>
      </Container>
    )
}

export default TyreDisplay
