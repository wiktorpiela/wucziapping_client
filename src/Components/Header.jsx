import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

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

    const navi = useNavigate()

    return (
        <AppBar position="static">
            <Toolbar sx={toolbarStyle}>
                <div>
                    <Button onClick={()=>navi('/')}><Typography variant='h4' sx={{color:'white'}}>wucziapping</Typography></Button>
                </div>
                <div>
                    <Button onClick={()=>navi('/closed-ended-questions')} sx={appBarBtnStyle}>Pytania zamknięte</Button>
                    <Button onClick={()=>navi('/open-ended-questions')} sx={appBarBtnStyle}>Pytania otwarte</Button>
                    <Button onClick={()=>navi('/drag-drop-questions')}sx={appBarBtnStyle}>Kafelki</Button>
                    <Button onClick={()=>navi('/exam')} sx={appBarBtnStyle}>Egzamin</Button>
                </div>
                <div>
                    <Button onClick={()=>navi('/login')} sx={appBarBtnStyle}>Zaloguj</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
