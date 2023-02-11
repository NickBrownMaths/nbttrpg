function GearBar(props) {
  <div className="GearBar">
  <div className="GearNameBox"> {props.name} </div>
  <div className="Statbar">
    {
      Object.keys(props.statblock.STAT).map((key, index) => (
        <Statbox index={index} stat={props.statblock.STAT[key]} statlabel={key} />
      ))
    }
  </div>
  <div className="Statbar">
    {
      Object.keys(props.statblock.ELMT).map((key, index) => (
        <Statbox index={index} stat={props.statblock.ELMT[key]} statlabel={key} />
      ))
    }
  </div>
  <div className="Statbar">
    {
      Object.keys(props.statblock.TRNG).map((key, index) => (
        <Statbox index={index} stat={props.statblock.TRNG[key]} statlabel={key} />
      ))
    }
  </div>
  <div className="Statbar">
    {
      Object.keys(props.GEAR).map((key, index) => (
        <Statbox index={index} stat={props.GEAR[key]} statlabel={key} />
      ))
    }
  </div>
</div>
}
export default GearBar;