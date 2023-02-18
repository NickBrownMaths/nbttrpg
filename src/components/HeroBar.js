import Statbox from "./Statbox";

function HeroBar(props) {
  return (
    <div className="SubDivsInCol Card ColourMid">
      <div className="NameBox"> {props.name + " (level " + props.level + ")"} </div>
      <div className="SubDivsInRow">
        <div className="Statbar">
          {
            Object.keys(props.statblock.STAT).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.STAT[objKey]} statlabel={objKey} statType='STAT' isBig={true} hideNeg={props.hideNeg}/>
            ))
          }
          {
            Object.keys(props.statblock.ELMT).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.ELMT[objKey]} statlabel={objKey} statType='ELMT' isBig={true} hideNeg={props.hideNeg}/>
            ))
          }
          {
            Object.keys(props.statblock.TRNG).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.TRNG[objKey]} statlabel={objKey} statType='TRNG' isBig={true} hideNeg={props.hideNeg}/>
            ))
          }
          {
            Object.keys(props.statblock.GEAR).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.GEAR[objKey]} statlabel={objKey} statType='GEAR' isBig={true} hideNeg={props.hideNeg}/>
            ))
          }
          {
            Object.keys(props.secondStat.DEFS).map((objKey, index) => (
              <Statbox key={index} stat={props.secondStat.DEFS[objKey]} statlabel={objKey} statType='DEF' isBig={true} hideNeg={props.hideNeg}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HeroBar;