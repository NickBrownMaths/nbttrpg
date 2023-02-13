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
            <StatCard key={index} index={index} name={a.name} statblock={a} setABCDEF={props.setAncestry} />
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
            <StatCard key={index} index={index} name={b.name} statblock={b} setABCDEF={props.setBackground} />
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
            <StatCard key={index} index={index} name={c.name} statblock={c} setABCDEF={props.setCulture} />
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
            <StatCard key={index} index={index} name={d.name} statblock={d} setABCDEF={props.setDream} />
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
            <StatCard key={index} index={index} name={e.name} statblock={e} setABCDEF={props.setEccentricity} />
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
            <StatCard key={index} index={index} name={f.name} statblock={f} setABCDEF={props.setFlaw} />
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
            <StatCard key={index} index={index} name={g.name} statblock={g} setABCDEF={props.setAddGear} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'AG') {
    return (
      <div className="GridHolder">
        <InteractionGrid statblock={props.statblock} />
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