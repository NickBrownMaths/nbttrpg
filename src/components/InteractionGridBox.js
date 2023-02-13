function InteractionGridBox(props) {
  if (props.isAxis === 1) {
    return (
      <div className={'InterBoxAxis'}>
        <div className='StatNumber'>{props.number}</div>
        <div className='StatLabel'>{props.label}</div>
      </div>
    )
  }
  else {
    return (
      <div className={'InterBox'}>
        <div className='StatNumber'>{props.number}</div>
        <div className='StatLabel'>{props.label}</div>
      </div>
    )
  }
}
export default InteractionGridBox;