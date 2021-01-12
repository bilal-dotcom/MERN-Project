import React from 'react';
import axios from 'axios'

class AjoutTeam extends React.Component{


    constructor(props){
        super(props);
            this.state={
                code:'',
                nom:'',
                age:'',
            }
        this.onChangeCode=this.onChangeCode.bind(this);
        this.onChangeNom=this.onChangeNom.bind(this);
        this.onChangeAge=this.onChangeAge.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }


    onChangeCode(e){
        this.setState({
            code:e.target.value
        })
    }

    onChangeNom(e){
        this.setState({
            nom:e.target.value
        })
    }

    onChangeAge(e){
        this.setState({
            age:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const util={
            codeTeam: this.state.code,
            club: this.state.nom,
            ageTeam: this.state.age
        }
       console.log(util);

    //    axios.post('http://10.30.40.121:3158/ajoutTeam',util)
       axios.post('http://localhost:3000/ajoutTeam',util)  
    .then(res=> console.log(res.data));
       this.setState({
        code:'',
        nom:'',
        age:''
       })
    }

    render(){
        return(
        <div className="container">
            <h3>Ajouter une Team</h3>
            <form onSubmit={this.onSubmit}>
              
                <div className="form-group">
                <label>Code : </label>
                <input type="text" required
                className="form-control"
                value={this.state.code}
                onChange={this.onChangeCode}
                />
               </div>

                <div className="form-group">
                <label>Nom : </label>
                <input type="text" required
                className="form-control"
                value={this.state.nom}
                onChange={this.onChangeNom}
                />
               </div>


                <div className="form-group">
                <label>Age : </label>
                <input type="text" required
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
                />
               </div>

                <div className="form-group">
                <input type="submit" value="Ajout" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}

export default AjoutTeam;