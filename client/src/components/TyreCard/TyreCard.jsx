import React from 'react'
import { Card, Typography } from '@material-ui/core'

const TyreCard = (props) => {

    const {tyre, brands} = props
   
   const brandForTyre = brands.filter((brand) => {
        return brand.title === tyre.brand
    })

    console.log(brandForTyre)

    return (
        <Card>
            <img src={brandForTyre[0].logo} alt={brandForTyre[0].title}></img>
            <Typography variant="h4">{tyre.brand} {tyre.title}</Typography>
            
            <img src={tyre.img} alt="Tyre"></img>

        </Card>
    )
}

export default TyreCard
