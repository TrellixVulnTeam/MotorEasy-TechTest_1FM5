import React from 'react'
import { Card } from '@material-ui/core'

const TyreCard = (props) => {

    const tyre = props.tyre

    return (
        <Card>
            <h1>{tyre.title}</h1>
            <img src={tyre.img}></img>

        </Card>
    )
}

export default TyreCard
