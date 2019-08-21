import React from "react";
import BotCard from "../components/BotCard";

//it receives bots [{}{}{}{}] from BotsPage
// and clickHandler (fxn to BotsPage.setState of yourBotArmy)

class BotCollection extends React.Component {
  //your code here

  render(){
	  console.log("BotCollection props", this.props)
	  const botCards = this.props.bots.length>0 ? 
	  this.props.bots.map(bot => {return <BotCard bot = {bot} clickHandler={this.props.clickHandler}/>})
	  :null

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
