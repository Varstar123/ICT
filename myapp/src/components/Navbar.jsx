import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <AppBar className="bar">
                <Toolbar className="nav">
                    <h4>MyApp</h4>
                    &nbsp;
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
                    &nbsp;
                    <Link to='/count'>
                        <Button variant='contained'>count</Button>
                    </Link>
                    &nbsp;
                    <Link to='/welcome'>
                        <Button variant='contained'>welcome</Button>
                    </Link>
                    &nbsp;
                    <Link to='/card'>
                        <Button variant='contained'>card</Button>
                    </Link>
                    &nbsp;
                    <Link to='/api'>
                        <Button variant='contained'>api</Button>
                    </Link>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar