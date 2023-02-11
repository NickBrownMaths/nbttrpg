function CharacterSave(props) {
  return (
    <div className="InstructionHolder">
      <div className="InstructionBox">
        <p>
          Please copy the contents and save in a safe location.
        </p>
      </div>
      <br />
      <div className="InstructionBox">
        <p>
        {"{"}
          "NAME": "{props.name}",
          "LEVEL": {props.level},
          "A": "{props.ancestry}",
          "B": "{props.background}",
          "C": "{props.culture}",
          "D": "{props.dream}",
          "E": "{props.eccentricity}",
          "F": "{props.flaw}",
          "STATBLOCK": {JSON.stringify(props.statblock)},
          "DEFENSES": {JSON.stringify(props.defenses)}
          {"}"}
        </p>
      </div>
    </div>
  )
}
export default CharacterSave;