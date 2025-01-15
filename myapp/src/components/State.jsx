import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { React } from 'react'


const State = () => {
    var [name, setname] = useState("HIM COOK NOW!!")
    var [display, submitname] = useState("Test")
    const handleinput = (e) => {
        setname(e.target.value)
    }
    const displayinput = () => {
        submitname(name)
    }

    
    return (
        <div>
            <h1>GUSTAVO BASICS</h1>
            <img src="https://i.pinimg.com/236x/af/fa/11/affa116d6878a6ef00792ade7b2f45f8.jpg" alt="" srcset="" />

            <h3>Hii {display}</h3>
            
            <TextField variant='outlined' label="InputVariationCheck" onChange={handleinput}></TextField>
            <br />
            <br />
            <Button variant='contained' onClick={displayinput}>Submit</Button>
        </div>
    )
}

export default State