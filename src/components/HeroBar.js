import Statbox from "./Statbox";
import InteractionGrid from "./InteractionGrid";

function HeroBar(props) {
  return (
    <div className="HeroBar">
      <div className="NameBox"> {props.name + " (level " + props.level + ")"} </div>
      <div className="Statbar">
        {
          Object.keys(props.statblock.STAT).map((key, index) => (
            <Statbox index={index} stat={props.statblock.STAT[key]} statlabel={key} />
          ))
        }
      </div>
      <div className="Statbar">
        {
          Object.keys(props.statblock.ELMT).map((key, index) => (
            <Statbox index={index} stat={props.statblock.ELMT[key]} statlabel={key} />
          ))
        }
      </div>
      <div className="Statbar">
        {
          Object.keys(props.statblock.TRNG).map((key, index) => (
            <Statbox index={index} stat={props.statblock.TRNG[key]} statlabel={key} />
          ))
        }
      </div>
      <div className="Statbar">
        {
          Object.keys(props.statblock.GEAR).map((key, index) => (
            <Statbox index={index} stat={props.statblock.GEAR[key]} statlabel={key} />
          ))
        }
      </div>
      <div className="Statbar">
        {
          Object.keys(props.defenses).map((key, index) => (
            <Statbox index={index} stat={props.defenses[key]} statlabel={key} />
          ))
        }
      </div>
    </div>
  )
}

export default HeroBar;