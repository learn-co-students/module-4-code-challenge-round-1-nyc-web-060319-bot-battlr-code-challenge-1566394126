import React from "react";
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {bots : [],
          yourBotArmy : []}

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => this.setState({bots: json}))
  }
  clickHandler = (botToAdd) =>{
    // console.log(botToAdd)
    this.state.yourBotArmy.includes(botToAdd) ? null 
    :this.setState({yourBotArmy: [...this.state.yourBotArmy, botToAdd]})
  }
  
  render() {
    

    console.log("bots", this.state.bots)
    console.log("yourBotArmy", this.state.yourBotArmy)
    return (
      <div className="bots-page">
      <BotCollection bots = {this.state.bots} clickHandler = {this.clickHandler}/>
      </div>
    );
  }

}

export default BotsPage;
