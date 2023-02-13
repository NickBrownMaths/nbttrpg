import CharacterCreation from "./CharacterCreation";
import CharacterSave from "./CharacterSave";
import CharacterLoad from "./CharacterLoad";
import Play from "./Play";

function Page(props) {
  if (props.currentPage === 'CC') {
    return <CharacterCreation
      name={props.name}
      setName={props.setName}
      statblock={props.statblock}
      defenses={props.defenses}
      level={props.level}

      setAncestry={props.setAncestry}
      setBackground={props.setBackground}
      setCulture={props.setCulture}
      setDream={props.setDream}
      setEccentricity={props.setEccentricity}
      setFlaw={props.setFlaw}
      ancestry={props.ancestry}
      background={props.background}
      culture={props.culture}
      dream={props.dream}
      eccentricity={props.eccentricity}
      flaw={props.flaw}
      setLevelUpMessage={props.setLevelUpMessage}
      setAddGear={props.setAddGear}
      gear={props.gear}
    />
  } else if (props.currentPage === 'CL') {
    return (
      <CharacterLoad
        setDataMessage={props.setDataMessage}
      />
    )
  }
  else if (props.currentPage === 'CS') {
    return (
      <CharacterSave
        name={props.name}
        statblock={props.statblock}
        defenses={props.defenses}
        level={props.level}
        ancestry={props.ancestry}
        background={props.background}
        culture={props.culture}
        dream={props.dream}
        eccentricity={props.eccentricity}
        flaw={props.flaw}
      />
    )
  }
  else {
    return <Play
      name={props.name}
      statblock={props.statblock}
      defenses={props.defenses}
      level={props.level}
    />
  }
}
export default Page;