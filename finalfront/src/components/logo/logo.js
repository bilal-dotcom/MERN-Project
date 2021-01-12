import React from 'react'
import logo from './logo.jpg'

class Logo extends React.Component{
    render(){
        return(
            <div className="container">
               <img src={logo} alt="Logo" />
            </div> 
        )
    }
}

export default Logo ;