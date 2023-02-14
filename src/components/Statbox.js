function Statbox(props) {
  if (props.stat !== 0) {
    if (props.isBig) {
      return (
        <div className={'Statbox ' + props.statType}>
          <div className='StatNumber'>{props.stat}</div>
          <div className='StatLabel' >{props.statlabel}</div>
        </div>
      )
    }
    else {
      return (
        <div className={'Statbox ' + props.statType} >
          <div className='StatLabel' >{props.statlabel + '(' + props.stat + ')'}</div>
        </div>
      )
    }
  }
}

export default Statbox;