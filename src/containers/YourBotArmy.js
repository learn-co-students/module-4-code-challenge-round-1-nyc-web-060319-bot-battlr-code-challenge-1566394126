import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  state ={}

  
  render(){
    const yourBotArmy =
      this.props.yourBotArmy.map(bot =>{
        return <BotCard bot={bot} clickHandler={this.props.clickHandler}/>
      })

    console.log("rgnir",this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {yourBotArmy}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
