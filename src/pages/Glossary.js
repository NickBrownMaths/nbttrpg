import { useState } from "react";
import InteractionGrid from "../components/InteractionGrid";
import NavBar from "../components/NavBar";

function Glossary(props) {
  const [currentTab, setCurrentTab] = useState('RU');

  let buttons = [];
  buttons.push([() => setCurrentTab('RU'), 'Rules',]);
  buttons.push([() => setCurrentTab('AB'), 'Abilities',]);
  buttons.push([() => setCurrentTab('DA'), 'Data',]);

  if (currentTab === 'RU') {
    return (
      <div>
        <NavBar buttons={buttons} buttonType='NavButton' />
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