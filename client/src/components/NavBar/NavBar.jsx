import React from 'react'
import styles from './NavBar.module.scss'
import { Typography } from '@material-ui/core'

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Typography className={styles.navHeader} variant="h1">Tyres Direct</Typography>
        </nav>
    )
}

export default NavBar
