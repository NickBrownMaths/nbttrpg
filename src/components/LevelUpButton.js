function LevelUpButton(props) {
  return (
    <button className={'LevelUpButton ' + props.statType} onClick={() => {props.setLevelUpMessage({type: props.statType, stat: props.statlabel})}}>
      <div className='StatNumber'> +1 </div>
      <div className='StatLabel'>{props.statlabel}</div>
    </button>
  )
}

export default LevelUpButton;