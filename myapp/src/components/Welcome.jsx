import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './Welcome.css'

const Welcome = () => {
    var [name, setname] = useState("Varun")
    const react = () => {
        setname("React")
    }

    const angular = () => {
        setname("Angular")
    }

    const vue = () => {
        setname("Vue")
    }

    useEffect((vue),[])
    return (
        <div>
            <h1>Welcome {name}</h1>
            <div class="but">
                <Button variant='contained' onClick={react}>React</Button>
                &nbsp;
                <Button variant='contained' onClick={angular}>Angular</Button>
                &nbsp;
                <Button variant='contained' onClick={vue}>Vue</Button>
            </div>
        </div>
    )
}

export default Welcome