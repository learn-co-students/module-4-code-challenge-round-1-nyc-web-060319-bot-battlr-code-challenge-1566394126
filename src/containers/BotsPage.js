import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

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

  removeBotAndReturnNewArray = (array, bot) => {
    array.splice(array.indexOf(bot),1)
    return array
  }

  clickHandler = (bot) =>{
    // console.log(bot)
    this.state.yourBotArmy.includes(bot) ? this.setState({yourBotArmy: this.removeBotAndReturnNewArray(this.state.yourBotArmy, bot)})
    :this.setState({yourBotArmy: [...this.state.yourBotArmy, bot]})
  }

  // enlistedIsGreen = (bot) =>{
  //   this.state.yourBotArmy.includes(bot)? "turn it green" : null
  // }
  
  render() {
    

    console.log("bots", this.state.bots)
    console.log("yourBotArmy", this.state.yourBotArmy)
    return (
      <div className="bots-page">
        <BotCollection bots = {this.state.bots} clickHandler = {this.clickHandler}/>
        <YourBotArmy yourBotArmy = {this.state.yourBotArmy} clickHandler = {this.clickHandler}/>
      </div>
    );
  }

}

export default BotsPage;
