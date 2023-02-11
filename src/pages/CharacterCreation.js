import { useState } from 'react';

import NavBar from "../components/NavBar";
import HeroBar from '../components/HeroBar';
import CCTab from './CCTab';

function CharacterCreation(props) {

  const [currentTab, setCurrentTab] = useState('A');

  let buttons = [];
  buttons.push([() => setCurrentTab('A'), 'Ancestry ' + props.ancestry,]);
  buttons.push([() => setCurrentTab('B'), 'Background ' + props.background,]);
  buttons.push([() => setCurrentTab('C'), 'Culture ' + props.culture,]);
  buttons.push([() => setCurrentTab('D'), 'Dream ' + props.dream,]);
  buttons.push([() => setCurrentTab('E'), 'Eccentricity ' + props.eccentricity,]);
  buttons.push([() => setCurrentTab('F'), 'Flaw ' + props.flaw,]);
  buttons.push([() => setCurrentTab('G'), 'Gear',]);
  buttons.push([() => setCurrentTab('N'), 'Name',]);
  buttons.push([() => setCurrentTab('AG'), 'Ability Grid',]);

  return (
    <div>
      <HeroBar
        name={props.name}
        statblock={props.statblock}
        defenses={props.defenses}
        level={props.level}
      />
      <NavBar buttons={buttons} />
      <CCTab
        currentTab={currentTab}
        statblock={props.statblock}
        setAncestry={props.setAncestry}
        setBackground={props.setBackground}
        setCulture={props.setCulture}
        setDream={props.setDream}
        setEccentricity={props.setEccentricity}
        setFlaw={props.setFlaw}
        setName={props.setName}
      />
    </div>
  )
}

export default CharacterCreation;