import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>Login</h1><br />
            <TextField variant='outlined' label="Username">Username</TextField><br />
            <br/>
            <TextField variant='outlined' label="Password">Password</TextField><br />
            <Button variant='contained'>Login</Button>
        </div>
    )
}

export default Login