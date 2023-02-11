import HeroBar from "../components/HeroBar";
import InteractionGrid from "../components/InteractionGrid";
import LevelUpButton from "../components/LevelUpButton";

function LevelUp(props) {
  return (
    <div>
      <HeroBar
        name={props.name}
        statblock={props.statblock}
        defenses={props.defenses}
        level={props.level}
      />
      <div className="Statbar">
        {
          Object.keys(props.statblock.STAT).map((key, index) => (
            <LevelUpButton index={index} statlabel={key} setLevelUpMessage={props.setLevelUpMessage} statType={'STAT'} />
          ))
        }
      </div>
      <div className="Statbar">
        {
          Object.keys(props.statblock.ELMT).map((key, index) => (
            <LevelUpButton index={index} statlabel={key} setLevelUpMessage={props.setLevelUpMessage} statType={'ELMT'} />
          ))
        }
      </div>
      <div className="Statbar">
        {
          Object.keys(props.statblock.TRNG).map((key, index) => (
            <LevelUpButton index={index} statlabel={key} setLevelUpMessage={props.setLevelUpMessage} statType={'TRNG'} />
          ))
        }
      </div>


    </div>
  )
}

export default LevelUp;