import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Tile from "./components/Tile"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      topScore: 0,
      characters: characters, 
      clicks: {},
      message: "Click an Image to Begin!"
    } 

    this.shuffle();
  }

  handleClick = (id) => {
    if (!this.state.clicks[id]) {
        this.increaseScore();

        this.state.clicks[id] = true;
        this.state.message= "You Guessed Correctly!"
        this.shuffle();
    }
    else {
      this.resetGame();
      this.state.message= "You Guessed Incorrectly; Game Over!"
    }

  }


  increaseScore = () => {

    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    })

    if (newScore > this.state.topScore)
      this.setState({
      topScore: newScore
    })

    if (newScore === characters.length) {
      this.setState({
        message: "You Won!"
      })
    }

      

  }

  resetGame = () => {
  
    this.setState({
      score: 0,
      clicks: {}
    })
    this.shuffle();
  }
  
  shuffle = () => {
    this.setState({
      state:  this.state.characters.sort( () => Math.random() - 0.5)
    })
  
  }
  render() {
    return (
      <div className="container-fluid>">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">An Atypical Clicky Game</a>
        </nav>

         <div className= "container">
          <div class= "row">
            <div class="col-3">
              <span>Score: {this.state.score} | </span>
              <span>Top Score: {this.state.topScore}</span>
            </div>
          </div>
          <div className= "row">
            <div className= "col-6">
            </div>
          </div>
              <h2>{this.state.message}</h2>
        <div className= "wrapper">
        {this.state.characters.map(character => {
        return (
          <Tile 
            key={character.id}
            image={character.image} 
            handleClick={this.handleClick}
            id={character.id}
          />
        )
      })
  }
      </div>
      </div>
      </div>
    
    );
  }
}



  



export default App;
