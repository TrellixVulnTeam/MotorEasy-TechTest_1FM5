import React from 'react'
import { Card, Typography } from '@material-ui/core'
import NumberFormat from 'react-number-format'

const TyreCard = (props) => {

    const {tyre, brands} = props
   
   const brandForTyre = brands.filter((brand) => {
        return brand.title === tyre.brand
    })

    return (
        <Card raised>
            <img src={brandForTyre[0].logo} alt={brandForTyre[0].title}></img>
            <Typography align="center" variant="h5">{tyre.title}</Typography>
            <Typography align="center">Size:  {tyre.size[0]}/{tyre.size[1]} R{tyre.size[2]}</Typography>
            <Typography align="center">
                <NumberFormat decimalScale={2} fixedDecimalScale displayType="text" prefix="Price: £" value={tyre.price} />
            </Typography>
            <img src={tyre.img} alt="Tyre"></img>
            

        </Card>
    )
}

export default TyreCard
