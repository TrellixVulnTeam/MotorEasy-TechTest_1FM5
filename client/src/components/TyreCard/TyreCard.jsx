import React from 'react'
import { Card, Typography } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import styles from './TyreCard.module.scss'

const TyreCard = (props) => {

    const {tyre, brands} = props
   
   const brandForTyre = brands.filter((brand) => {
        return brand.title === tyre.brand
    })

    return (
        <Card raised>
            <img className={styles.tyreCardImg} src={brandForTyre[0].logo} alt={brandForTyre[0].title}></img>
            <Typography style={{fontWeight:"bold"}}  gutterBottom align="center" variant="h5">{tyre.title}</Typography>
            <Typography  gutterBottom align="center">Size:  {tyre.size[0]}/{tyre.size[1]} R{tyre.size[2]}</Typography>
            <Typography gutterBottom align="center">
                <NumberFormat decimalScale={2} fixedDecimalScale displayType="text" prefix="Price: £" value={tyre.price} />
            </Typography>
            <img className={styles.tyreCardImg} src={tyre.img} alt="Tyre"></img>
            

        </Card>
    )
}

export default TyreCard
