function Statbox(props) {
  if (props.stat !== 0) {
    return (
      <div className="Statbox">
        <div className="stat">{props.stat}</div>
        <div className="statLabel">{props.statlabel}</div>
      </div>
    )
  }
}

export default Statbox;