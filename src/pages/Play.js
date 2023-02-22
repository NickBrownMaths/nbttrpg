import { useState, useEffect } from "react";
import { AllStats, AllTechniques, getAbilities } from "../Utils/AllData";

import ClickBar from "../components/ClickBar";
import HeroBar from "../components/HeroBar";
import SearchForm from "../components/SearchForm";
import StatCard from "../components/StatCard";
import TechCard from "../components/TechCard";
import NavBar from "../components/NavBar";
import PlayTab from "../components/PlayTab";

function Play(props) {

const [currentTab, setCurrentTab] = useState('GG')

  const [searchTermI, setSearchTermI] = useState('');
  const [searchTermT, setSearchTermT] = useState('');

  const [allstats, setAllstats] = useState(new AllStats());
  const [allTechs, setAllTechs] = useState(new AllTechniques());
  const [charAbilities, setCharAbilities] = useState(getAbilities(props.statblock));

  useEffect(() => {
    setCharAbilities(getAbilities(props.statblock))
  }, [props.statblock]);


  let buttons = [];
  buttons.push([() => setCurrentTab('GG'), 'Gear',]);
  buttons.push([() => setCurrentTab('EF'), 'Effects',]);
  buttons.push([() => setCurrentTab('ST'), 'Stats',]);

  return (
    <div className="SubDivsInRow" >
      <div className="SubDivsInCol SubDivsAtTop">
        <HeroBar
          name={props.name}
          statblock={props.statblock}
          secondStat={props.secondStat}
          level={props.level}
          hideNeg={true}
        />
        <NavBar buttons={buttons} buttonType='SmallNavButton' />
        <PlayTab 
          gear={props.gear}
          onClickGear={props.setDelGear}
          iB={props.injury}
          onClickIB={props.setDelInjury}
          inputS={[props.stanceData]}
          onClickS={props.setDelStance}
          currentTab={currentTab}
          charAbilities={charAbilities}
          statblock={props.statblock}
        />
        
      </div>
      <div className="Card GEAR">
        <SearchForm setSearchTerm={setSearchTermI} appear={true} />
        {
          allstats.ib.map((ib, index) => (
            <StatCard key={index} index={index} name={ib.name} userStat={[props.statblock, props.secondStat, props.gear]} statblock={ib} onClick={props.setAddInjury} searchTerm={searchTermI} isBig={false} hideNeg={false} />
          ))
        }
        {
          allstats.ts.map((ts, index) => (
            <StatCard key={index} index={index} name={ts.name} userStat={[props.statblock, props.secondStat, props.gear]} statblock={ts} onClick={props.setStance} searchTerm={searchTermI} isBig={false} hideNeg={false} />
          ))
        }
      </div>
      <div className="Card GEAR MediumWideCard">
        <SearchForm setSearchTerm={setSearchTermT} appear={true} />
        {
          allTechs.t.map((t, index) => (
            <TechCard key={index} index={index} name={t.name} t={t} searchTerm={searchTermT} userGear={props.gear} userAbl={charAbilities} userStat={[props.statblock, props.secondStat, props.gear]} />
          ))
        }
      </div>
    </div>
  )
}

export default Play;