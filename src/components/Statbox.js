function Statbox(props) {
  if (props.stat !== 0) {
    return (
      <div className="Statbox">
        <div className="StatNumber">{props.stat}</div>
        <div className={'StatLabel ' + props.statType} >{props.statlabel}</div>
      </div>
    )
  }
}

export default Statbox;