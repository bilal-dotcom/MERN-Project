const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connection = mongoose.connection;

//user: bildotcom
//Pasword: Encrypted2019

const mongoAtlasUrl = 'mongodb+srv://bildotcom:Encrypted2019@cluster0.yipma.mongodb.net/<dbname>?retryWrites=true&w=majority';
 
mongoose.connect(mongoAtlasUrl || 'mongodb://localhost:27017/ProjetFinal',({useUnifiedTopology:true,useNewUrlParser:true}));
//mongoose.connect(mongoAtlasUrl || 'mongodb://FikaraBil:FikaraBil@10.30.40.121:27017/FikaraBil',{ useNewUrlParser: true }  );


const cors = require ('cors');
app.use(cors());

const Ligue= require('./models/modLigue');
const Player= require('./models/modPlayer');
const Team= require('./models/modTeam');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


connection.once('open',()=>{
    console.log('Connected to MongoDB for ProjetFinal');
    });
   
//  const PORT= 3158;

// app.listen(PORT, ()=>{ //le serveur attend les requete sur le port 3158
//     console.log("J'ecoute le port 3158!");
// });

    
const PORT= 3000;

app.listen(PORT, ()=>{ //le serveur attend les requete sur le port 3000
    console.log("J'ecoute le port 3000!");
});


//Etape 1 - Pour insertion des donnnes
//Player
app.post('/ajoutPlayer',(req,res)=>{

    console.log('req.body',req.body);

    const player = new Player(req.body);

    player.save((err,player)=> {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(player);
    });

});

//Ligue
app.post('/ajoutLigue',(req,res)=>{

    console.log('req.body',req.body);

    const ligue = new Ligue(req.body);

    ligue.save((err,ligue)=> {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(ligue);
    });

});

//Team
app.post('/ajoutTeam',(req,res)=>{

    console.log('req.body',req.body);

    const team = new Team(req.body);

    team.save((err,team)=> {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(team);
    });

});

///Etape 2 - Pour lire des donnnes
app.get('/lirePlayer',(req,res)=>{

    Player.find()
        .exec()
        .then(player => res.status(200).json(player));
});

app.get('/lireTeam',(req,res)=>{

    Team.find()
        .exec()
        .then(team => res.status(200).json(team));
});

app.get('/lireLigue',(req,res)=>{

    Ligue.find()
        .exec()
        .then(ligue => res.status(200).json(ligue));
});


//Supprimer un player
app.delete('/delPlayer/:id',(req,res)=>{
    const id= req.params.id;

    Player.findByIdAndDelete(id, (err,player)=> {
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({msg: `Player avec l'id ${player._id} supprimee`});
    });
});

//Chercher avec l'id
app.get('/lireUnPlayer/:id',(req,res)=>{
    const id = req.params.id;

    Player.findById(id)
    .exec()
    .then(player => res.status(200).json(player));

});

//Edit un Player
app.post('/updatePlayer/:id',(req,res)=>{
    const id=req.params.id;

    Player.updateOne({_id:req.params.id}, req.body)
    .exec()
    .then(player => res.status(200).json(player));

})