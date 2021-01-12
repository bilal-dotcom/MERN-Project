import React from 'react';
import axios from 'axios'

class AjoutLigue extends React.Component{


    constructor(props){
        super(props);
            this.state={
                code:'',
                nom:'',
                rang:'',
            }
        this.onChangeCode=this.onChangeCode.bind(this);
        this.onChangeNom=this.onChangeNom.bind(this);
        this.onChangeRang=this.onChangeRang.bind(this);
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

    onChangeRang(e){
        this.setState({
            rang:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const util={
            codeLigue: this.state.code,
            nomLigue: this.state.nom,
            rang: this.state.rang
        }

       //axios.post('http://10.30.40.121:3158/ajoutLigue',util)
        axios.post('http://localhost:3000/ajoutLigue',util)  
    .then(res=> console.log(res.data));
       this.setState({
        code:'',
        nom:'',
        rang:''
       })
    }

    render(){
        return(
        <div className="container">
            <h3>Ajouter une Ligue</h3>
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
                <label>Rang : </label>
                <input type="text" required
                className="form-control"
                value={this.state.rang}
                onChange={this.onChangeRang}
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

export default AjoutLigue;