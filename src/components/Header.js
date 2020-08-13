import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <Link to='/'><h1 style={h1Style}> Noteful </h1></Link>
        </header >
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const h1Style = {
    color: '#ffffff'
}


export default Header
