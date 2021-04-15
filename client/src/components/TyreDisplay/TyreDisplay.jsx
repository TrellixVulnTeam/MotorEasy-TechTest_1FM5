import React, { useEffect, useState } from 'react'
import TyreCard from '../TyreCard'
import { Container, Grid, Typography } from '@material-ui/core'
import BrandSearch from './BrandSearch'
import TitleSearch from './TitleSearch'

const TyreDisplay = (props) => {

    const [tyres, setTyres] = useState('')

    const getAllTyres = () => {
        fetch("http://localhost:3010/tyres").then((res) => {
        return res.json()
       }).then((data) => {
           
        data.sort((a, b) => {
            if (a.brand < b.brand) return -1
            if (a.brand > b.brand) return 1
            return 0
            })
        
         setTyres(data)
       })
    }

    useEffect(() => {
  
        getAllTyres()

             
    }, [])

    // use value of child to fetch all tyres from selected brand
    const getSelectedBrand = (e) => {

         fetch(`http://localhost:3010/tyres/${e.target.value}`).then((res) => {
             return res.json()
         }).then((data) => {
             setTyres(data)
         })
    }

    const getSelectedTyre = (e) => {
        if(e.target.value !== ''){ 
            fetch(`http://localhost:3010/tyres/title/${e.target.value}`).then((res) => {
                return res.json()
            }).then((data) => {
                setTyres(data)
            })
        } else if(e.target.value === ''){
            getAllTyres()
        }
       
    }



    return (

        <Container>
          <Grid container spacing = {2}>
              
              <Grid item xs={3}>
                    <BrandSearch align="center" getSelectedBrand = {getSelectedBrand} brands = {props.brands}/>
                </Grid>
                <Grid item xs={3}>
                    <Typography align="center">OR</Typography>
                </Grid>
                <Grid item xs={4}>
                    <TitleSearch getSelectedTyre = {getSelectedTyre} 
                tyres = {tyres} />
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
