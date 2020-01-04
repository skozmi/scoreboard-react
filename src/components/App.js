import React, { Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Teasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      },
      {
        name: "Milos",
        score: 0,
        id: 5
      }
    ]
  };

  //player id counter
  prevPlayerId = 5;

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players : [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id )
      };
    });
  }
  
  handleScoreChange = (index, delta)=> {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }  

  render(){
    return (
      <div className="scoreboard">
        {/*Header of scoreboard*/}
          <Header players={this.state.players}/>
        {/*Player list*/}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;