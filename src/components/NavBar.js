import NavButton from "./NavButton";

function NavBar(props) {
  return (
    <div className="SubDivsInRow">
      {
        props.buttons.map((button, index) => (
          <NavButton key={index} onClick={button[0]} text={button[1]} buttonType={props.buttonType}/>
        ))
      }
    </div>
  )
}

export default NavBar;