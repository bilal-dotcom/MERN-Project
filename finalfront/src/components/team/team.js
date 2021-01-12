import React from 'react'
import axios from 'axios'
import Genliste from './Genliste'

class Team extends React.Component{
    
    constructor(props){
        super();
        
        this.state={
            players:[]
        }
        this.deletePlayer=this.deletePlayer.bind(this);
    }

     componentDidMount(){
        //   axios.get('http://10.30.40.121:3158/lirePlayer')
        axios.get('http://localhost:3000/lirePlayer')
         .then(response =>{
            // console.log(response.data)
             if(response.data.length > 0 ){
                 this.setState ({
                     players: response.data
                 })
             }
         } )
     };

     deletePlayer(id){
        // axios.delete('http://10.30.40.121:3158/delPlayer/'+id)
        axios.delete('http://localhost:3000/delPlayer/'+id)
        .then(res => console.log(res.data));
        this.setState({
            players:this.state.players.filter(el =>el._id !==id)
        })
    }

    userListe(){

        return this.state.players.map(utilCourant =>{
            return <Genliste player={utilCourant} deletePlayer={this.deletePlayer} key={utilCourant.code}/>;
        }) 
     }
 
    
    render(){
        return(
            <div className="container">
               <h3>Liste des joueurs</h3>
               <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Code</th>
                        <th>Nom</th>
                        <th>Club</th>
                        <th>Rang</th>
                    </tr>
                </thead>

            <tbody>
                 {this.userListe()}
            </tbody>
            
            </table>
            </div>
    
        )
    }
}

export default Team;