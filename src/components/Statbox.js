function Statbox(props) {
  let show = true;
  if (props.stat === 0) { show = false; }
  else if (props.stat < 0 && props.hideNeg === true) { show = false; }
  if (show) {
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