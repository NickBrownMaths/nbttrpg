function Statbox(props) {
  if (props.stat !== 0) {
    return (
      <div className={'Statbox ' + props.statType}>
        <div className='StatNumber'>{props.stat}</div>
        <div className='StatLabel' >{props.statlabel}</div>
      </div>
    )
  }
}

export default Statbox;