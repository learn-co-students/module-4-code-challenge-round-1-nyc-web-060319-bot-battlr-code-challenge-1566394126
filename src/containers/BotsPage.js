import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {bots : [],
          yourBotArmy : [],
          botForSpecs : {},
          loadBotSpecs: false,
          enlistJustFired: false,
          removeJustFired: false}

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => this.setState({bots: json}))
  }

  removeBotAndReturnNewArray = (array, bot) => {
    array.splice(array.indexOf(bot),1)
    this.setState({removeJustFired:true})
    return array
  }

  clickHandler = (bot) =>{
    // console.log(bot)
    return this.state.yourBotArmy.includes(bot) ? this.setState({yourBotArmy: this.removeBotAndReturnNewArray(this.state.yourBotArmy, bot)})
    :this.setState({loadBotSpecs: true, botForSpecs: bot})
  }

  enlistBot = (bot) =>{
    this.state.yourBotArmy.includes(bot) ? alert("You already enlisted this bot go away.")
    :this.setState({yourBotArmy: [...this.state.yourBotArmy, bot], loadBotSpecs: false, enlistJustFired: true})
  }

  goBackToList = () =>{
    this.setState({loadBotSpecs:false, enlistJustFired:false})
  }
 
  scrollToBottom = () => {
    this.bottom.scrollIntoView({ behavior: "auto" });
  }

  scrollToTop = () => {
    this.top.scrollIntoView({ behavior: "auto" });
  }

  render() {
    
    
    console.log("bots", this.state.bots)
    console.log("yourBotArmy", this.state.yourBotArmy)
    return (
      <div className="bots-page">
        <div ref={(el) => {this.top = el;}}></div>
  {this.state.loadBotSpecs ? <BotSpecs bot={this.state.botForSpecs} enlistBot = {this.enlistBot} goBackToList={this.goBackToList}/> : null}
  {this.state.enlistJustFired ? this.scrollToBottom() : null}
  {this.state.removeJustFired ? this.scrollToTop() : null}
        
        <BotCollection bots = {this.state.bots} clickHandler = {this.clickHandler}/>
        <YourBotArmy yourBotArmy = {this.state.yourBotArmy} clickHandler = {this.clickHandler}/>
        <div ref={(el) => {this.bottom = el;}}></div>
      </div>
    );
  }

}

export default BotsPage;
