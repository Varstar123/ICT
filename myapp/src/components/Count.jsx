import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Count = () => {
    var [setres, res] = useState(0);

    const c1 = () => {
        res(setres+=1);
    }

    const c2 = () => {
        res(setres-=1);
    }
    return (
        <div>
            <h1>COUNT: {setres}</h1>
            <Button variant='contained' onClick={c1}>Plus</Button>
            <br />
            <br />
            <Button variant='contained' onClick={c2}>Minus</Button>
        </div>
    )
}

export default Count