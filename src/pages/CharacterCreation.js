import { useEffect, useState } from 'react';

import NavBar from "../components/NavBar";
import HeroBar from '../components/HeroBar';
import CCTab from './CCTab';
import ClickBar from '../components/ClickBar';
import SearchForm from '../components/SearchForm';

function CharacterCreation(props) {

  const [currentTab, setCurrentTab] = useState('A');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(true);

  let buttons = [];
  buttons.push([() => {setShowSearchBar(false) ; setCurrentTab('N')}, 'Name',]);
  buttons.push([() => {setShowSearchBar(true) ; setCurrentTab('A')}, 'Ancestry ' + props.charChoices[0],]);
  buttons.push([() => {setShowSearchBar(true) ; setCurrentTab('B')}, 'Background ' + props.charChoices[1],]);
  buttons.push([() => {setShowSearchBar(true) ; setCurrentTab('C')}, 'Culture ' + props.charChoices[2],]);
  buttons.push([() => {setShowSearchBar(true) ; setCurrentTab('D')}, 'Dream ' + props.charChoices[3],]);
  buttons.push([() => {setShowSearchBar(true) ; setCurrentTab('E')}, 'Eccentricity ' + props.charChoices[4],]);
  buttons.push([() => {setShowSearchBar(true) ; setCurrentTab('F')}, 'Flaw ' + props.charChoices[5],]);
  buttons.push([() => {setShowSearchBar(true) ; setCurrentTab('G')}, 'Gear',]);
  buttons.push([() => {setShowSearchBar(false) ; setCurrentTab('LU')}, 'Level Up',]);
  buttons.push([() => {setShowSearchBar(false) ; setCurrentTab('AG')}, 'Ability Grid',]);

  return (
    <div>
      <div className='SubDivsInRow'>
        <HeroBar
          name={props.name}
          statblock={props.statblock}
          defenses={props.defenses}
          level={props.level}
          hideNeg={true}
        />
        <ClickBar
          input={props.gear}
          onClick={props.setDelGear}
          cardWidth='WideCard'
          hideNeg={true}
        />
      </div>
      <NavBar buttons={buttons} />
      <SearchForm setSearchTerm={setSearchTerm} appear={showSearchBar}/>
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
        setLevelUpMessage={props.setLevelUpMessage}
        setAddGear={props.setAddGear}
        searchTerm={searchTerm}
      />
    </div>
  )
}

export default CharacterCreation;