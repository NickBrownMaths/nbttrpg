import '../App.css';

import Statbox from "./Statbox";

function StatCard(props) {

  if (props.searchTerm === '' || props.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
    return (
      <button className="NarrowCard ColourLight ColourMidHover" onClick={() => { props.setABCDEF(props.index) }}>
        <div className="NameBox"> {props.name} </div>
        <div className="Statbar">
          {
            Object.keys(props.statblock.STAT).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.STAT[objKey]} statlabel={objKey} statType='STAT' isBig={props.isBig}/>
            ))
          }
          {
            Object.keys(props.statblock.ELMT).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.ELMT[objKey]} statlabel={objKey} statType='ELMT' isBig={props.isBig}/>
            ))
          }
          {
            Object.keys(props.statblock.TRNG).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.TRNG[objKey]} statlabel={objKey} statType='TRNG' isBig={props.isBig}/>
            ))
          }
          {
            Object.keys(props.statblock.GEAR).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.GEAR[objKey]} statlabel={objKey} statType='GEAR' isBig={props.isBig}/>
            ))
          }
        </div>
      </button>
    )
  }
}
export default StatCard;