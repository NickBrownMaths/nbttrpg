import { useState } from "react";
import InteractionGrid from "../components/InteractionGrid";
import NavBar from "../components/NavBar";

function Glossary(props) {
  const [currentTab, setCurrentTab] = useState('RU');
  const [currentRuleTab, setCurrentRuleTab] = useState('O');

  let buttons = [];
  buttons.push([() => setCurrentTab('RU'), 'Rules',]);
  buttons.push([() => setCurrentTab('AB'), 'Abilities',]);
  buttons.push([() => setCurrentTab('DA'), 'Data',]);

  let rulesButtons = [];
  rulesButtons.push([() => setCurrentRuleTab('O'), 'Overview',]);
  rulesButtons.push([() => setCurrentRuleTab('S'), 'Stats',]);
  rulesButtons.push([() => setCurrentRuleTab('T'), 'Techniques',]);


  if (currentTab === 'RU') {
    return (
      <div>
        <NavBar buttons={buttons} buttonType='NavButton' />
        <NavBar buttons={rulesButtons} buttonType='NavButton' />
        <div className="Card GEAR MediumWideCard">
        {(currentRuleTab === 'O') ? 'This is a game all about living, working, and adventuring in a high fantasy setting.' : ''}
        {(currentRuleTab === 'S') ? 'At the core of the game is the system of stats. Stats determine what your character can do, and how well they can do it.' : ''}
        {(currentRuleTab === 'T') ? 'Techniques represent everything that an adventurere can do. If you want to do something that isnt in your technique list, the chances are you dont have the right skills to do it.' : ''}
        </div>
      </div>
    )
  }
  else if (currentTab === 'AB') {
    return (
      <div>
        <NavBar buttons={buttons} buttonType='NavButton' />
        <div className="GridHolder">
          <InteractionGrid statblock={props.statblock} />
        </div>
      </div>
    )
  }

  else if (currentTab === 'DA') {
    return (
      <div>
        <NavBar buttons={buttons} buttonType='NavButton' />
      </div>
    )
  }
}

export default Glossary;