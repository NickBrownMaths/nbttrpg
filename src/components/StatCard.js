import '../App.css';

import Statbox from "./Statbox";

function StatCard(props) {
  return (
    <button className="Card ColourLight ColourMidHover" onClick={() => { props.setABCDEF(props.name) }}>
      <div className="NameBox"> {props.name} </div>
      <div className="Statbar">
        {
          Object.keys(props.statblock.STAT).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.STAT[objKey]} statlabel={objKey} statType='STAT'/>
          ))
        }
        {
          Object.keys(props.statblock.ELMT).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.ELMT[objKey]} statlabel={objKey} statType='ELMT'/>
          ))
        }
        {
          Object.keys(props.statblock.TRNG).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.TRNG[objKey]} statlabel={objKey} statType='TRNG'/>
          ))
        }
        {
          Object.keys(props.statblock.GEAR).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.GEAR[objKey]} statlabel={objKey} statType='GEAR'/>
          ))
        }
      </div>
    </button>
  )
}
export default StatCard;