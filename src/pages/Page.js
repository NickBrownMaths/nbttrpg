import CharacterCreation from "./CharacterCreation";
import CharacterSave from "./CharacterSave";
import CharacterLoad from "./CharacterLoad";
import Play from "./Play";
import Glossary from "./Glossary";

function Page(props) {
  if (props.currentPage === 'CC') {
    return <CharacterCreation
      name={props.name}
      setName={props.setName}
      statblock={props.statblock}
      secondStat={props.secondStat}
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
      charChoices={props.charChoices}

      setLevelUpMessage={props.setLevelUpMessage}

      setAddGear={props.setAddGear}
      gear={props.gear}
      setDelGear={props.setDelGear}
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
        secondStat={props.secondStat}
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
  else if (props.currentPage === 'PP') {
    return <Play
      name={props.name}
      statblock={props.statblock}
      secondStat={props.secondStat}
      level={props.level}
      gear={props.gear}
      setDelGear={props.setDelGear}
      injury={props.injury} setAddInjury={props.setAddInjury} setDelInjury={props.setDelInjury}
      stance={props.stance} setStance={props.setStance} setDelStance={props.setDelStance} stanceData={props.stanceData}
    />
  }
  else if (props.currentPage === 'GG') {
    return (
      <Glossary statblock={props.statblock}/>
    )
  }
}
export default Page;