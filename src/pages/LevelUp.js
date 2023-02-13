import LevelUpButton from "../components/LevelUpButton";

function LevelUp(props) {
  return (
    <div>
      <div className="Statbar">
        {
          Object.keys(props.statblock.STAT).map((objKey, index) => (
            <LevelUpButton key={index} statlabel={objKey} setLevelUpMessage={props.setLevelUpMessage} statType={'STAT'} />
          ))
        }
        {
          Object.keys(props.statblock.ELMT).map((objKey, index) => (
            <LevelUpButton key={index} statlabel={objKey} setLevelUpMessage={props.setLevelUpMessage} statType={'ELMT'} />
          ))
        }
        {
          Object.keys(props.statblock.TRNG).map((objKey, index) => (
            <LevelUpButton key={index} statlabel={objKey} setLevelUpMessage={props.setLevelUpMessage} statType={'TRNG'} />
          ))
        }
      </div>
    </div>
  )
}

export default LevelUp;