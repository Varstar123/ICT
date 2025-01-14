import { useState } from "react"
import { React } from 'react'


const State = () => {
    var [name, setname] = useState("HIM COOK NOW!!")
    return (
        <div>
            <h1>GUSTAVO BASICS</h1>
            <img src="https://i.pinimg.com/236x/af/fa/11/affa116d6878a6ef00792ade7b2f45f8.jpg" alt="" srcset="" />
            <h3>LET {name}</h3>
        </div>
    )
}

export default State