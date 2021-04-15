import React, { useEffect, useState } from 'react'
import TyreCard from '../TyreCard'
import { Container, Grid, Typography } from '@material-ui/core'
import BrandSearch from './BrandSearch'
import TitleSearch from './TitleSearch'

const TyreDisplay = (props) => {

    const [tyres, setTyres] = useState('')

    // gets all tyres from API
    const getAllTyres = () => {
        fetch("http://localhost:3010/tyres").then((res) => {
        return res.json()
       }).then((data) => {
        // sorts returned tyres in brand order
        data.sort((a, b) => {
            if (a.brand < b.brand) return -1
            if (a.brand > b.brand) return 1
            return 0
            })
         //set tyres state to the return tyres
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
             // set tyres to all tyres from selected brand
             setTyres(data)
         })
    }

    // use value of child to fetch all tyres with matching title
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
              
              <Grid item xs={12} md={4} lg={3}>
                    <BrandSearch align="center" getSelectedBrand = {getSelectedBrand} brands = {props.brands}/>
                </Grid>
                <Grid item xs={0} md={1}>
                    <Typography style={{marginTop:"20px"}} align="center">OR</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <TitleSearch getSelectedTyre = {getSelectedTyre} 
                tyres = {tyres} />
            </Grid>
            {tyres && tyres.map((tyre) => {
                return (
                  <Grid item md={4} sm={6} xs={12} > 
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
