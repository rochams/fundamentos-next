'use client';

import React, { useState } from "react";

const styleInput = {
    border:"1px solid #CECECE",
    borderRadius:"5px",
    padding:"3px",
}
const styleButtonSubmit = {
    border:"1px solid #CECECE",
    borderRadius:"5px",
    padding:"3px",
}
const styleDiv = {
    width:"100%",
    display:"flex",
    gap:"1rem",
    alignItems:"start",
    justifyContent:"center",
    flexDirection:"column"
}

const User = (props) => {

    const [ userId, setUserId ] = useState(1)
    const [ dadosUser, setDadosUser ] = useState({})

    const obterDados = async function() {
        const request = await fetch(`http://localhost:3000/api/users/${userId}`, {next: { revalidate: 60}})
        const data = await request.json()
        setDadosUser(data)
    }

    return (
        <div style={{padding: "2rem", backgroundColor:"#230033ff"}}>
            <div style={styleDiv}>
                <input style={styleInput} type="number" name="user-id" id="" value={ userId } onChange={ (e) => setUserId(e.target.value) }/>
                <p>Nome: { dadosUser.name }</p>
                <p>Email: { dadosUser.email }</p>
            </div>
            <div style={{marginTop: "3rem"}}>
                <button style={styleButtonSubmit} onClick={() => obterDados()}>Obter dados</button>
            </div>
        </div>
    )

}

export default User;