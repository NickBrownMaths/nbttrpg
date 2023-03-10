import '../App.css';

import Statbox from "./Statbox";

function StatCard(props) {

  let displayMe = false;
  if (props.searchTerm === '' || props.name.toLowerCase().includes(props.searchTerm.toLowerCase())) { displayMe = true; }

  if (displayMe) {

    let LT = '';
    if(props.statblock.INJBLES.length > 0) {if (props.statblock.INJBLES[0].includes('Long Term')) {LT = ' (LT)'}}

    return (
      <button className="NarrowCard ColourLight ColourMidHover" onClick={() => { props.onClick(props.index) }}>
        <div className="NameBox"> {props.name + LT} </div>
        <div className="Statbar">
          {
            Object.keys(props.statblock.BODY).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.BODY[objKey]} statlabel={objKey} statType='BODY' isBig={props.isBig} hideNeg={props.hideNeg} />
            ))
          }
          {
            Object.keys(props.statblock.STAT).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.STAT[objKey]} statlabel={objKey} statType='STAT' isBig={props.isBig} hideNeg={props.hideNeg} />
            ))
          }
          {
            Object.keys(props.statblock.ELMT).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.ELMT[objKey]} statlabel={objKey} statType='ELMT' isBig={props.isBig} hideNeg={props.hideNeg} />
            ))
          }
          {
            Object.keys(props.statblock.TRNG).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.TRNG[objKey]} statlabel={objKey} statType='TRNG' isBig={props.isBig} hideNeg={props.hideNeg} />
            ))
          }
          {
            Object.keys(props.statblock.GEAR).map((objKey, index) => (
              <Statbox key={index} stat={props.statblock.GEAR[objKey]} statlabel={objKey} statType='GEAR' isBig={props.isBig} hideNeg={props.hideNeg} />
            ))
          }
          {
            Object.keys(props.statblock.ONSLEEP).map((objKey, index) => (
              <Statbox key={index} stat={''} statlabel={props.statblock.ONSLEEP[objKey]} statType='ONSLEEP' isBig={props.isBig} hideNeg={props.hideNeg} />
            ))
          }
          {
            Object.keys(props.statblock.ONTURN).map((objKey, index) => (
              <Statbox key={index} stat={''} statlabel={props.statblock.ONTURN[objKey]} statType='ONTURN' isBig={props.isBig} hideNeg={props.hideNeg} />
            ))
          }
        </div>
      </button>
    )
  }
}
export default StatCard;