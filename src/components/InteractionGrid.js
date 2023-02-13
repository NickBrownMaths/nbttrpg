import { getStatInteraction } from "../Utils/AllData";
import InteractionGridBox from "./InteractionGridBox";

function InteractionGrid(props) {

  //SKILL = STAT + (TRNG - 1) * STAT
  return (
    <div className="GridBase">
      
      <InteractionGridBox isAxis={1} number={''} label={''} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.str} label={'str'} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.con} label={'con'} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.dex} label={'dex'} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.agi} label={'agi'} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.spd} label={'spd'} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.per} label={'per'} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.int} label={'int'} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.wis} label={'wis'} />
      <InteractionGridBox isAxis={1} number={props.statblock.STAT.cha} label={'cha'} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.fighting} label={'fighting'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.fighting) } label={'grappling'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.fighting) } label={'protecting'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.fighting) } label={'fencing'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.fighting) } label={'unarmed'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.fighting) } label={'charge'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.fighting) } label={'projectile'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.fighting) } label={'tactics'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.fighting) } label={'focus'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.fighting) } label={'flourish'} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.crafting} label={'crafting'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.crafting) } label={'construction'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.crafting) } label={'alchemy'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.crafting) } label={'smithing'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.crafting) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.crafting) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.crafting) } label={'jewellry'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.crafting) } label={'clockwork'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.crafting) } label={'tailoring'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.crafting) } label={'cookery'} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.performing} label={'performing'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.performing) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.performing) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.performing) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.performing) } label={'dance'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.performing) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.performing) } label={'painting'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.performing) } label={'comedy'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.performing) } label={'poetry'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.performing) } label={'music'} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.scholarship} label={'scholarship'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.scholarship)} label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.scholarship)} label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.scholarship)} label={'calligraphy'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.scholarship)} label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.scholarship)} label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.scholarship)} label={'astronomy'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.scholarship)} label={'numeracy'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.scholarship)} label={'history'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.scholarship)} label={'literature'} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.athletics} label={'athletics'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.athletics) } label={'lifting'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.athletics) } label={'swimming'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.athletics) } label={'climbing'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.athletics) } label={'acrobatics'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.athletics) } label={'sprinting'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.athletics) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.athletics) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.athletics) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.athletics) } label={''} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.nature} label={'nature'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.nature) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.nature) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.nature) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.nature) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.nature) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.nature) } label={'tracking'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.nature) } label={'anatomy'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.nature) } label={'botany'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.nature) } label={'husbandry'} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.healing} label={'healing'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.healing) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.healing) } label={'apothecary'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.healing) } label={'surgery'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.healing) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.healing) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.healing) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.healing) } label={'diagnosis'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.healing) } label={'shrinkery'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.healing) } label={''} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.subterfuge} label={'subterfuge'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.subterfuge) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.subterfuge) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.subterfuge) } label={'sleight'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.subterfuge) } label={'stealth'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.subterfuge) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.subterfuge) } label={'spying'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.subterfuge) } label={'encryption'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.subterfuge) } label={'deception'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.subterfuge) } label={'misdirection'} />
      <InteractionGridBox isAxis={1} number={props.statblock.TRNG.diplomacy} label={'diplomacy'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.str, props.statblock.TRNG.diplomacy) } label={'intimidation'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.con, props.statblock.TRNG.diplomacy) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.dex, props.statblock.TRNG.diplomacy) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.agi, props.statblock.TRNG.diplomacy) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.spd, props.statblock.TRNG.diplomacy) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.per, props.statblock.TRNG.diplomacy) } label={''} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.int, props.statblock.TRNG.diplomacy) } label={'coercion'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.wis, props.statblock.TRNG.diplomacy) } label={'negotiation'} />
      <InteractionGridBox isAxis={0} number={getStatInteraction(props.statblock.STAT.cha, props.statblock.TRNG.diplomacy) } label={'persuasion'} />
    </div>
  )
}
export default InteractionGrid;