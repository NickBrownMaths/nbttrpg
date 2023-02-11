import HeroBar from "../components/HeroBar";

function Play(props) {
  return(
    <div>
      <HeroBar
        name={props.name}
        statblock={props.statblock}
        defenses={props.defenses}
        level={props.level}
      />
      <div>play</div>
      
    </div>
  )
}

export default Play;