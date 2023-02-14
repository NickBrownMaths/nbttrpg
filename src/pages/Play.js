import GearBar from "../components/GearBar";
import HeroBar from "../components/HeroBar";

function Play(props) {
  return (
    <div className="SubDivsInRow">
      <div className="SubDivsInCol">
        <HeroBar
          name={props.name}
          statblock={props.statblock}
          defenses={props.defenses}
          level={props.level}
        />
        <GearBar
          gear={props.gear}
          setDelGear={props.setDelGear}
          cardWidth='Card'
        />
      </div>
      <div className="WideCard GEAR"> This area will contain: Searchable list of injuries/enchantemts & searchable list of techniques. These will include techs which impart stances . </div>
    </div>
  )
}

export default Play;