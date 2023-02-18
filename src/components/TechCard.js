import '../App.css';

import Statbox from "./Statbox";

function TechCard(props) {

  let tagText = '';
  if (props.t.tags.length > 0) {
    tagText = tagText + 'Tag';
    if (props.t.tags.length > 1) { tagText = tagText + 's'; }
    tagText = tagText + ': ';
    for (let i = 0; i < props.t.tags.length; i++) {
      if (i > 0) { tagText = tagText + ', ' };
      tagText = tagText + props.t.tags[i];
    }
  }

  let defenseText = '';
  if (props.t.defense !== '') {
    defenseText = defenseText + 'Target defense: ' + props.t.defense;
  }

  let targetSizeText = '';
  if (props.t.targetSize !== '') {
    targetSizeText = targetSizeText + 'Target size: ' + props.t.targetSize;
  }

  let skillsText = ''
  if (props.t.skills.length > 0) {
    skillsText = skillsText + 'Skill';
    if (props.t.skills.length > 1) { skillsText = skillsText + 's'; }
    skillsText = skillsText + ': ';
    for (let i = 0; i < props.t.skills.length; i++) {
      if (i > 0) { skillsText = skillsText + ', ' };
      {
        Object.keys(props.t.skills[i]).map((objKey, idx) => (
          skillsText = skillsText + objKey  + " (" + props.t.skills[i][objKey] + ")" 
        ))
      }
    }
  }

  let traitsText = ''
  if (props.t.traits.length > 0) {
    traitsText = traitsText + 'Gear Trait';
    if (props.t.traits.length > 1) { traitsText = traitsText + 's'; }
    traitsText = traitsText + ': ';
    for (let i = 0; i < props.t.traits.length; i++) {
      if (i > 0) { traitsText = traitsText + ', ' };
      {
        Object.keys(props.t.traits[i]).map((objKey, idx) => (
          traitsText = traitsText + objKey  + " (" + props.t.traits[i][objKey] + ")" 
        ))
      }
    }
  }


  if (props.searchTerm === '' || props.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
    return (
      <button className="Card" onClick={() => { console.log('hello') }}>
        <div className="NameBox"> {props.name} </div>
        <div className="Techbar">
          {tagText}
          {(tagText === '') ? '' : <br />}
          {defenseText}
          {(defenseText === '') ? '' : <br />}
          {targetSizeText}
          {(targetSizeText === '') ? '' : <br />}
          {skillsText}
          {(skillsText === '') ? '' : <br />}
          {traitsText}
        </div>
      </button>
    )
  }
}
export default TechCard;