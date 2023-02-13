import ReactCurvedText from "react-curved-text";

{/* <ReactCurvedText
  width={70}
  height={60}
  cx={36}
  cy={45}
  rx={30}
  ry={35}
  startOffset={0}
  reversed={true}
  text="construction"
  textProps={{ style: { fontSize: 12 } }}
  textPathProps={null}
  tspanProps={null}
  ellipseProps={null}
  svgProps={null}
/> */}



function Statbox(props) {
  if (props.stat !== 0) {
    return (
      <div className="Statbox">

        <div className="StatNumber">{props.stat}</div>
        <div className={'StatLabel ' + props.statType} >{props.statlabel}</div>

      </div>
    )
  }
}

export default Statbox;