import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const toolbarStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

const appBarBtnStyle = {
    color:'white',
    fontSize: '1.5rem',
    marginRight: '1rem'
}

function Header() {
    return (
        <AppBar>
            <Toolbar sx={toolbarStyle}>
                <div>
                    <Button><Typography variant='h4' sx={{color:'white'}}>wucziapping</Typography></Button>
                </div>
                <div>
                    <Button sx={appBarBtnStyle}>Pytania zamknięte</Button>
                    <Button sx={appBarBtnStyle}>Pytania otwarte</Button>
                    <Button sx={appBarBtnStyle}>Kafelki</Button>
                    <Button sx={appBarBtnStyle}>Egzamin</Button>
                </div>
                <div>
                    <Button sx={appBarBtnStyle}>Zaloguj</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
