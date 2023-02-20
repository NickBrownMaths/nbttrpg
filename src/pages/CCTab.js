import { AllStats } from "../Utils/AllData";

import StatCard from "../components/StatCard";
import CharacterNameForm from "../components/CharacterNameForm";
import InteractionGrid from "../components/InteractionGrid";
import LevelUp from "./LevelUp";

function CCTab(props) {
  let allstats = new AllStats();

  if (props.currentTab === 'A') {
    return (
      <div className="SubDivsInRow">
        {
          allstats.a.map((a, index) => (
            <StatCard key={index} index={index} name={a.name} userStat={[props.statblock, props.SecondStat, props.gear]} statblock={a} onClick={props.setAncestry} searchTerm={props.searchTerm} isBig={true} hideNeg={false} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'B') {
    return (
      <div className="SubDivsInRow">
        {
          allstats.b.map((b, index) => (
            <StatCard key={index} index={index} name={b.name} userStat={[props.statblock, props.SecondStat, props.gear]} statblock={b} onClick={props.setBackground} searchTerm={props.searchTerm} isBig={true} hideNeg={false} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'C') {
    return (
      <div className="SubDivsInRow">
        {
          allstats.c.map((c, index) => (
            <StatCard key={index} index={index} name={c.name} userStat={[props.statblock, props.SecondStat, props.gear]} statblock={c} onClick={props.setCulture} searchTerm={props.searchTerm} isBig={true} hideNeg={false} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'D') {
    return (
      <div className="SubDivsInRow">
        {
          allstats.d.map((d, index) => (
            <StatCard key={index} index={index} name={d.name} userStat={[props.statblock, props.SecondStat, props.gear]} statblock={d} onClick={props.setDream} searchTerm={props.searchTerm} isBig={true} hideNeg={false} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'E') {
    return (
      <div className="SubDivsInRow">
        {
          allstats.e.map((e, index) => (
            <StatCard key={index} index={index} name={e.name} userStat={[props.statblock, props.SecondStat, props.gear]} statblock={e} onClick={props.setEccentricity} searchTerm={props.searchTerm} isBig={true} hideNeg={false} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'F') {
    return (
      <div className="SubDivsInRow">
        {
          allstats.f.map((f, index) => (
            <StatCard key={index} index={index} name={f.name} userStat={[props.statblock, props.SecondStat, props.gear]} statblock={f} onClick={props.setFlaw} searchTerm={props.searchTerm} isBig={true} hideNeg={false} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'G') {
    return (
      <div className="SubDivsInRow">
        {
          allstats.g.map((g, index) => (
            <StatCard key={index} index={index} name={g.name} userStat={[props.statblock, props.SecondStat, props.gear]} statblock={g} onClick={props.setAddGear} searchTerm={props.searchTerm} isBig={true} hideNeg={false} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'LU') {
    return <LevelUp
      statblock={props.statblock}
      setLevelUpMessage={props.setLevelUpMessage}
    />
  }
  else {
    return (
      <CharacterNameForm
        setName={props.setName}
      />
    )
  }
}

export default CCTab;