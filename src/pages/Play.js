import { useState } from "react";
import { AllStats } from "../Utils/AllData";

import ClickBar from "../components/ClickBar";
import HeroBar from "../components/HeroBar";
import SearchForm from "../components/SearchForm";
import StatCard from "../components/StatCard";

function Play(props) {

  const [searchTermI, setSearchTermI] = useState('');
  const [searchTermT, setSearchTermT] = useState('');

  let allstats = new AllStats();

  return (
    <div className="SubDivsInRow" >
      <div className="SubDivsInCol SubDivsAtTop">
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
      </div>
      <div className="Card GEAR">
        <SearchForm setSearchTerm={setSearchTermI} appear={true} />
        {
          allstats.tib.map((tib, index) => (
            <StatCard key={index} index={index} name={tib.name} statblock={tib} onClick={props.setAddInjuryB} searchTerm={searchTermI} isBig={false} hideNeg={false}/>
          ))
        }
        {
          allstats.tibb.map((tibb, index) => (
            <StatCard key={index} index={index} name={tibb.name} statblock={tibb} onClick={props.setAddInjuryBB} searchTerm={searchTermI} isBig={false} hideNeg={false}/>
          ))
        }
        {
          allstats.tim.map((tim, index) => (
            <StatCard key={index} index={index} name={tim.name} statblock={tim} onClick={props.setAddInjuryM} searchTerm={searchTermI} isBig={false} hideNeg={false}/>
          ))
        }
        {
          allstats.timm.map((timm, index) => (
            <StatCard key={index} index={index} name={timm.name} statblock={timm} onClick={props.setAddInjuryMM} searchTerm={searchTermI} isBig={false} hideNeg={false}/>
          ))
        }
      </div>
      <div className="Card GEAR MediumWideCard">
        <SearchForm setSearchTerm={setSearchTermT} appear={true} />
        This area will contain: Searchable list of techniques. These will include techs which impart stances.
      </div>
    </div>
  )
}

export default Play;