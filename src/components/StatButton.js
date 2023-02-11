import '../App.css';

import Statbox from "./Statbox";

function StatButton(props) {
  return (
    <button className="StatButton" onClick={() => { props.setABCDEF(props.name) }}>
      <div className="NameBox"> {props.name} </div>
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
    </button>
  )
}
export default StatButton;