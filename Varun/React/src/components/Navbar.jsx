import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h4>MyApp</h4>
                    &nbsp;
                    <Link to='/login'>
                        <Button variant='contained'>login</Button>
                    </Link>
                    &nbsp;
                    <Link to='/signup'>
                        <Button variant='contained'>signup</Button>
                    </Link>
                    &nbsp;

                    <Link to='/state'>
                        <Button variant='contained'>state</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar