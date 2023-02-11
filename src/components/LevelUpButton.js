function LevelUpButton(props) {
  return (
    <button className="LevelUpButton" onClick={() => {props.setLevelUpMessage({type: props.statType, stat: props.statlabel})}}>
      <div className="stat"> +1 </div>
      <div className="statLabel">{props.statlabel}</div>
    </button>
  )
}

export default LevelUpButton;