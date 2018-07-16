import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

import ModalComp from "./components/Modal";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      friends,
      cArr: [],
      score: 0,
      message: "Click Game",
      highScore: 0,
      lose: false,
      win: false
    };
  }
  handleClick = event => { 
    
    if (this.state.cArr.includes(event)) {      
      this.setState({lose: true, score: 0, cArr: []});      
      
    } else {
     
      console.log(event);   
      this.state.cArr.push(event);       
      this.setState({score: this.state.score + 1});      
      
      this.state.friends.sort(function() {
        return .5 - Math.random();
      });

      if (this.state.score >= this.state.highScore) this.setState({highScore: this.state.highScore + 1});

      if (this.state.score + 1 === 12) this.setState({win: true})                          
    }   
  };

  render() {
    const lose = this.state.lose;
    const win = this.state.win;
    
    return (
      <Wrapper>
        <ModalComp
          
          view={lose}
          message={"YOU LOSE"}
          text={"Try again?"}
          onClick={() => {              
              this.setState({lose: false})
            }
          }
        />          
        
        <ModalComp
          
          view={win}
          message={"YOU WIN"}
          text={"Amazing! Play again?"}
          onClick={() => {            
            this.setState({win: false})
          }
        }
          
        />      
        <Title
        message={this.state.message}
        score={this.state.score}
        highScore={this.state.highScore}
        />       
        
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            key={friend.id}
            image={friend.image}
            id={friend.id}
          
          />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
