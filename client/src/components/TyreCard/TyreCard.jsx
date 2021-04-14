import React from 'react'
import { Card, Typography } from '@material-ui/core'

const TyreCard = (props) => {

    const tyre = props.tyre

    return (
        <Card>
            <Typography variant="h4">{tyre.brand}</Typography>
            <Typography variant="h4">{tyre.title}</Typography>
            <img src={tyre.img} alt="Tyre"></img>

        </Card>
    )
}

export default TyreCard
