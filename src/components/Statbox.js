function Statbox(props) {
  let show = true;
  if (props.stat === 0) { show = false; }
  else if (props.stat < 0 && props.hideNeg === true) { show = false; }
  if (props.statlabel === '') { show = false; }



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
      let label = '';
      if (props.stat === '') { label = props.statlabel; }
      else { label = props.statlabel + '(' + props.stat + ')'}
      return (
        <div className={'Statbox ' + props.statType} >
          <div className='StatLabel' >{label}</div>
        </div>
      )
    }
  }
}

export default Statbox;