import { AllStats } from "../Utils/AllData";

import StatButton from "../components/StatButton";
import GearButton from "../components/GearButton";
import CharacterNameForm from "../components/CharacterNameForm";
import InteractionGrid from "../components/InteractionGrid";

function CCTab(props) {
  let allstats = new AllStats();

  if (props.currentTab === 'A') {
    return (
      <div className="CCButtonArea">
        {
          allstats.a.map((a, index) => (
            <StatButton name={a.name} statblock={a} setABCDEF={props.setAncestry} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'B') {
    return (
      <div className="CCButtonArea">
        {
          allstats.b.map((b, index) => (
            <StatButton name={b.name} statblock={b} setABCDEF={props.setBackground} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'C') {
    return (
      <div className="CCButtonArea">
        {
          allstats.c.map((c, index) => (
            <StatButton name={c.name} statblock={c} setABCDEF={props.setCulture} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'D') {
    return (
      <div className="CCButtonArea">
        {
          allstats.d.map((d, index) => (
            <StatButton name={d.name} statblock={d} setABCDEF={props.setDream} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'E') {
    return (
      <div className="CCButtonArea">
        {
          allstats.e.map((e, index) => (
            <StatButton name={e.name} statblock={e} setABCDEF={props.setEccentricity} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'F') {
    return (
      <div className="CCButtonArea">
        {
          allstats.f.map((f, index) => (
            <StatButton name={f.name} statblock={f} setABCDEF={props.setFlaw} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'G') {
    return (
      <div className="CCButtonArea">
        {
          allstats.g.map((g, index) => (
            <GearButton name={g.name} statblock={g} setABCDEF={props.setFlaw} />
          ))
        }
      </div>
    )
  }
  else if (props.currentTab === 'AG') {
    return (
      <div className="GridHolder">
        <InteractionGrid statblock={props.statblock}/>
      </div>
    )
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