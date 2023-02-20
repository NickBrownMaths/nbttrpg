function NavButton(props) {
  return (
    <button className={props.buttonType} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default NavButton;