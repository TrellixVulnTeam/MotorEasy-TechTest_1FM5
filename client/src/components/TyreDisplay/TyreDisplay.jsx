import React, { useEffect, useState } from 'react'
import TyreCard from '../TyreCard'
import { Container, Grid } from '@material-ui/core'
import BrandSearch from './BrandSearch'

const TyreDisplay = (props) => {

    const [tyres, setTyres] = useState('')

    useEffect(() => {
  
      fetch("http://localhost:3010/tyres").then((res) => {
        return res.json()
       }).then((data) => {
         setTyres(data)
         console.log(data)
       })

             
    }, [])

    const getSelectedBrand = (e) => {
         fetch(`http://localhost:3010/tyres/${e.target.value}`).then((res) => {
             return res.json()
         }).then((data) => {
             setTyres(data)
         })
    }

    return (

        <Container>
          <Grid container spacing = {2}>
              <Grid item xs={12}>
                <BrandSearch getSelectedBrand={getSelectedBrand} brands = {props.brands}/>
            </Grid>
            {tyres && tyres.map((tyre) => {
                return (
                  <Grid item xs={4} > 
                    <TyreCard brands = {props.brands} tyre = {tyre} />
                  </Grid>
                )
              })
            }
          </Grid>
      </Container>
    )
}

export default TyreDisplay
