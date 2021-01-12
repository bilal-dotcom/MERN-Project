import React from 'react'
import { Link } from 'react-router-dom';

class Genliste extends React.Component{
    render(){
        return(<tr>
            <td>{this.props.player.codePlayer}</td>
            <td>{this.props.player.nomPlayer}</td>
            <td>{this.props.player.club}</td>
            <td>{this.props.player.rang}</td>
            <td>
              <Link to={"/edit/" + this.props.player._id}>Edition</Link> | <a href="#" onClick={()=>{this.props.deletePlayer(this.props.player._id) }} >Suppression</a>
            </td>
        </tr>

        )
    }
}

export default Genliste;