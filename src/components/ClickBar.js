import StatCard from "./StatCard";

function ClickBar(props) {
  if (props.input.length > 0) {
    return (
      <div className={props.cardWidth + ' ColourMid'}>
        {
          props.input.map((inp, index) => (
            <StatCard key={index} index={index} name={inp.name} statblock={inp} onClick={props.onClick} searchTerm=''/>
          ))
        }
      </div>
    )
  }
}
export default ClickBar;