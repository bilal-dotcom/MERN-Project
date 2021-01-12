import React from 'react'
import axios from 'axios'


class Edit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            code:'',
            nom:'',
            club:'',
            rang:'',
            playertabteam:[],
            playertabrang:[],
               
        }
        this.onChangeCode=this.onChangeCode.bind(this);
        this.onChangeNom=this.onChangeNom.bind(this);
        this.onChangeTeam=this.onChangeTeam.bind(this);
        this.onChangeRang=this.onChangeRang.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentDidMount(){
        
       axios.get('http://localhost:3000/lireTeam')
        // axios.get('http://10.30.40.121:3158/lireTeam')
        .then(response =>{
           // console.log( (response.data)[0].dep)
            if(response.data.length > 0 ){
                 this.setState({
                playertabteam:(response.data).map(dep=>dep.club),
                club: (response.data)[0].club,
        })
               
            }
        } )

          axios.get('http://localhost:3000/lireLigue')
    //    axios.get('http://10.30.40.121:3158/lireLigue')
        .then(response =>{
           // console.log( (response.data)[0].dep)
            if(response.data.length > 0 ){
                 this.setState({
                 playertabrang:(response.data).map(dep=>dep.rang),
                 rang: (response.data)[0].rang,
        })
               
            }
        } )

        // this.setState({
        //     playertabteam:playertabteam.map(dep=>dep.club),
        //     club: playertabteam[0].club,
        // })



        console.log(this.props.match.params.id)
    //    axios.get('http://10.30.40.121:3158/lireUnPlayer/'+this.props.match.params.id)
       axios.get('http://localhost:3000/lireUnPlayer/'+this.props.match.params.id)
            .then(response => {
                    this.setState({
                        code: response.data.codePlayer,
                        nom: response.data.nomPlayer,
                        rang: response.data.rang,
                        club : response.data.club,
                    })
                   // console.log(response.data.dep)

            })
            .catch((error) =>{
                console.log(error);
            })

    };


  

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

    onChangeTeam(e){
        this.setState({
            club:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const util={
            codePlayer: this.state.code,
            nomPlayer: this.state.nom,
            rang: this.state.rang,
            club: this.state.club
        }
       console.log(util);
       const as = this.props.match.params.id;
       axios.post('http://localhost:3000/updatePlayer/'+as,util)
    //   axios.post('http://10.30.40.121:3158/updatePlayer/'+as,util)
       .then(res=> console.log(res.data));
       this.setState({
        code:'',
        nom:'',
        rang:'',
        club:''
       })
    }

    render(){
        return(
        <div className="container">
            <h3>Modifier un joueur</h3>
            <form onSubmit={this.onSubmit}>

          
            <div className="form-group">
                <label>Club : </label>

                <select required className="form-control"
                onChange={this.onChangeTeam}
                 value={this.state.club}>
                    {
                        this.state.playertabteam.map(function(club){
                            return <option
                                key={club}
                                value={club}>{club}
                            </option>;
                        })
                    }
                </select>

               </div>


               
            <div className="form-group">
                <label>Rang : </label>

                <select required className="form-control"
               value={this.state.rang}
              onChange={this.onChangeRang}
                >
                    {
                        this.state.playertabrang.map(function(rang){
                            return <option
                                key={rang}
                                value={rang}>{rang}
                            </option>;
                        })
                    }
                </select>

               </div>

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
                <input type="submit" value="Modifier" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}

export default Edit;