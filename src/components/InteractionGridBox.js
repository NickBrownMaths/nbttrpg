function InteractionGridBox(props) {
  if (props.isAxis === 1) {
    return (
      <div className="InterBoxAxis">
        <div className="stat">{props.number}</div>
        <div className="statLabel">{props.label}</div>
      </div>
    )
  }
  else {
    return (
      <div className="InterBox">
        <div className="stat">{props.number}</div>
        <div className="statLabel">{props.label}</div>
      </div>
    )
  }
}
export default InteractionGridBox;