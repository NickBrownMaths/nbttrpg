import CharacterLoadForm from "../components/CharacterLoadForm";

function CharacterLoad(props) {
  return (
    <div className="InstructionHolder">
      <div className="InstructionBox">
        <p>
          Please paste the contents of your save file.
        </p>
      </div>
      <br />
      <CharacterLoadForm
        setDataMessage={props.setDataMessage}
      />
    </div>
  )
}
export default CharacterLoad;