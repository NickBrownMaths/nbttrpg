import StatCard from "./StatCard";

function GearBar(props) {
  if (props.gear.length > 0) {
    return (
      <div className="WideCard ColourMid">
        {
          props.gear.map((g, index) => (
            <StatCard key={index} index={index} name={g.name} statblock={g} setABCDEF={props.setDelGear} searchTerm=''/>
          ))
        }
      </div>
    )
  }
}
export default GearBar;