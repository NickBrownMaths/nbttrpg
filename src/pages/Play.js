import { useState, useEffect } from "react";
import { AllStats, AllTechniques, getAbilities } from "../Utils/AllData";

import ClickBar from "../components/ClickBar";
import HeroBar from "../components/HeroBar";
import SearchForm from "../components/SearchForm";
import StatCard from "../components/StatCard";
import TechCard from "../components/TechCard";
import NavBar from "../components/NavBar";

let buttons = [];
  buttons.push([() => console.log('GG'), 'Gear',]);
  buttons.push([() => console.log('CC'), 'Effects',]);
  buttons.push([() => console.log('CL'), 'Full Stats',]);

function Play(props) {

  const [searchTermI, setSearchTermI] = useState('');
  const [searchTermT, setSearchTermT] = useState('');

  const [allstats, setAllstats] = useState(new AllStats());
  const [allTechs, setAllTechs] = useState(new AllTechniques());
  const [charAbilities, setCharAbilities] = useState(getAbilities(props.statblock));

  useEffect(() => {
    setCharAbilities(getAbilities(props.statblock))
  }, [props.statblock]);

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
        <NavBar buttons={buttons}/>
        <ClickBar
          input={props.gear}
          onClick={props.setDelGear}
          cardWidth='Card'
        />
        <ClickBar
          input={props.injuryB}
          onClick={props.setDelInjuryB}
          cardWidth='Card'
        />
        <ClickBar
          input={props.injuryBB}
          onClick={props.setDelInjuryBB}
          cardWidth='Card'
        />
        <ClickBar
          input={props.injuryM}
          onClick={props.setDelInjuryM}
          cardWidth='Card'
        />
        <ClickBar
          input={props.injuryMM}
          onClick={props.setDelInjuryMM}
          cardWidth='Card'
        />
        <ClickBar
          input={[props.stanceData]}
          onClick={props.setDelStance}
          cardWidth='Card'
        />
      </div>
      <div className="Card GEAR">
        <SearchForm setSearchTerm={setSearchTermI} appear={true} />
        {
          allstats.tib.map((tib, index) => (
            <StatCard key={index} index={index} name={tib.name} userStat={[props.statblock, props.secondStat, props.gear]} statblock={tib} onClick={props.setAddInjuryB} searchTerm={searchTermI} isBig={false} hideNeg={false} />
          ))
        }
        {
          allstats.tibb.map((tibb, index) => (
            <StatCard key={index} index={index} name={tibb.name} userStat={[props.statblock, props.secondStat, props.gear]} statblock={tibb} onClick={props.setAddInjuryBB} searchTerm={searchTermI} isBig={false} hideNeg={false} />
          ))
        }
        {
          allstats.tim.map((tim, index) => (
            <StatCard key={index} index={index} name={tim.name} userStat={[props.statblock, props.secondStat, props.gear]} statblock={tim} onClick={props.setAddInjuryM} searchTerm={searchTermI} isBig={false} hideNeg={false} />
          ))
        }
        {
          allstats.timm.map((timm, index) => (
            <StatCard key={index} index={index} name={timm.name} userStat={[props.statblock, props.secondStat, props.gear]} statblock={timm} onClick={props.setAddInjuryMM} searchTerm={searchTermI} isBig={false} hideNeg={false} />
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
            <TechCard key={index} index={index} name={t.name} t={t} searchTerm={searchTermT} userGear={props.gear} userAbl={charAbilities} userStat={[props.statblock, props.secondStat, props.gear]}/>
          ))
        }
      </div>
    </div>
  )
}

export default Play;