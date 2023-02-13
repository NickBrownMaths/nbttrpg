import StatCard from "./StatCard";

function GearBar(props) {
  return (
    <div className="WideCard ColourMid">
      {
        props.gear.map((g, index) => (
          <StatCard key={index} name={g.name} statblock={g} setABCDEF={props.setAddGear} />
        ))
      }
    </div>
  )
}
export default GearBar;