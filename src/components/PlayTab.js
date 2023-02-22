import { getStatInteraction } from "../Utils/AllData"

import ClickBar from "./ClickBar"
import Statbox from "./Statbox"

function PlayTab(props) {
  if (props.currentTab === 'GG') {
    return (
      <div>
        <ClickBar
          input={props.gear}
          onClick={props.onClickGear}
          cardWidth='Card'
        />
      </div>
    )
  }
  else if (props.currentTab === 'EF') {
    return (
      <div>
        <ClickBar
          input={props.iB}
          onClick={props.onClickIB}
          cardWidth='Card'
        />
        <ClickBar
          input={props.inputS}
          onClick={() => {}}
          cardWidth='Card'
        />
      </div>
    )
  }
  else {
    return (
      <div className="Statbar">
        {
          Object.keys(props.statblock.BODY).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.BODY[objKey]} statlabel={objKey} statType='BODY' isBig={true} hideNeg={true} />
          ))
        }
        {
          Object.keys(props.statblock.STAT).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.STAT[objKey]} statlabel={objKey} statType='STAT' isBig={true} hideNeg={true} />
          ))
        }
        {
          Object.keys(props.statblock.ELMT).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.ELMT[objKey]} statlabel={objKey} statType='ELMT' isBig={true} hideNeg={true} />
          ))
        }
        {
          Object.keys(props.statblock.TRNG).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.TRNG[objKey]} statlabel={objKey} statType='TRNG' isBig={true} hideNeg={true} />
          ))
        }
        {
          Object.keys(props.statblock.GEAR).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.GEAR[objKey]} statlabel={objKey} statType='GEAR' isBig={true} hideNeg={true} />
          ))
        }
        {
          Object.keys(props.statblock.ONSLEEP).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.ONSLEEP[objKey]} statlabel={''} statType='ONSLEEP' isBig={true} hideNeg={true} />
          ))
        }
        {
          Object.keys(props.statblock.ONTURN).map((objKey, index) => (
            <Statbox key={index} stat={props.statblock.ONTURN[objKey]} statlabel={''} statType='ONTURN' isBig={true} hideNeg={true} />
          ))
        }
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.fighting)} statlabel={'grappling'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.fighting)} statlabel={'protecting'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.fighting)} statlabel={'fencing'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.fighting)} statlabel={'unarmed'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.fighting)} statlabel={'charge'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.fighting)} statlabel={'projectile'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.fighting)} statlabel={'tactics'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.fighting)} statlabel={'focus'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.fighting)} statlabel={'flourish'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.fighting)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.crafting)} statlabel={'construction'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.crafting)} statlabel={'alchemy'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.crafting)} statlabel={'smithing'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.crafting)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.crafting)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.crafting)} statlabel={'jewellry'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.crafting)} statlabel={'clockwork'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.crafting)} statlabel={'tailoring'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.crafting)} statlabel={'cookery'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.crafting)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.performing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.performing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.performing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.performing)} statlabel={'dance'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.performing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.performing)} statlabel={'painting'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.performing)} statlabel={'comedy'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.performing)} statlabel={'poetry'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.performing)} statlabel={'music'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.performing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.scholarship)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.scholarship)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.scholarship)} statlabel={'calligraphy'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.scholarship)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.scholarship)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.scholarship)} statlabel={'astronomy'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.scholarship)} statlabel={'numeracy'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.scholarship)} statlabel={'history'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.scholarship)} statlabel={'literature'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.scholarship)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.athletics)} statlabel={'lifting'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.athletics)} statlabel={'swimming'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.athletics)} statlabel={'climbing'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.athletics)} statlabel={'acrobatics'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.athletics)} statlabel={'sprinting'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.athletics)} statlabel={'tavern games'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.athletics)} statlabel={'table games'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.athletics)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.athletics)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.athletics)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.nature)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.nature)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.nature)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.nature)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.nature)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.nature)} statlabel={'tracking'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.nature)} statlabel={'anatomy'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.nature)} statlabel={'botany'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.nature)} statlabel={'husbandry'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.nature)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.healing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.healing)} statlabel={'apothecary'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.healing)} statlabel={'surgery'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.healing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.healing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.healing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.healing)} statlabel={'diagnosis'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.healing)} statlabel={'shrinkery'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.healing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.healing)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.subterfuge)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.subterfuge)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.subterfuge)} statlabel={'sleight'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.subterfuge)} statlabel={'stealth'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.subterfuge)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.subterfuge)} statlabel={'inspecting'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.subterfuge)} statlabel={'encryption'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.subterfuge)} statlabel={'deception'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.subterfuge)} statlabel={'misdirection'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.subterfuge)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.diplomacy)} statlabel={'intimidation'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.diplomacy)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.diplomacy)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.diplomacy)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.diplomacy)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.diplomacy)} statlabel={''} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.diplomacy)} statlabel={'coercion'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.diplomacy)} statlabel={'negotiation'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.diplomacy)} statlabel={'persuasion'} />
        <Statbox statType='ABTY' isBig={true} hideNeg={true} stat={getStatInteraction(props.statblock.STAT.wpr, props.statblock.TRNG.diplomacy)} statlabel={''} />
      </div>
    )
  }

}

export default PlayTab