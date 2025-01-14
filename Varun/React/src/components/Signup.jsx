import { Button, Checkbox, Icon, TextField } from '@mui/material'
import './style.css'
import React from 'react'
const Signup = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Confirm password" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Mobile no" variant="outlined" /><br />
            <Button variant="contained">Submit</Button><br />
            <Checkbox {...Button} defaultChecked />
        </div>
    )
}

export default Signup