function LevelUpButton(props) {
  return (
    <button className="LevelUpButton" onClick={() => {props.setLevelUpMessage({type: props.statType, stat: props.statlabel})}}>
      <div className="StatNumber"> +1 </div>
      <div className={'StatLabel ' + props.statType}>{props.statlabel}</div>
    </button>
  )
}

export default LevelUpButton;