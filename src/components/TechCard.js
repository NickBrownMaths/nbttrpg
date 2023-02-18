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

  let rangeText = '';
  if (props.t.range !== '') {
    rangeText = rangeText + 'Range: ' + props.t.range;
  }

  let targetsText = '';
  if (props.t.targets !== '') {
    targetsText = targetsText + 'Targets: ' + props.t.targets;
  }

  let succTargText = '';
  if (props.t.succTarg.length > 0) {
    succTargText = succTargText + 'On hit(target): ';
    for (let i = 0; i < props.t.succTarg.length; i++) {
      if (i > 0) { succTargText = succTargText + ', ' };
      succTargText = succTargText + props.t.succTarg[i];
    }
  }

  let failTargText = '';
  if (props.t.failTarg.length > 0) {
    failTargText = failTargText + 'On miss(target): ';
    for (let i = 0; i < props.t.failTarg.length; i++) {
      if (i > 0) { failTargText = failTargText + ', ' };
      failTargText = failTargText + props.t.failTarg[i];
    }
  }

  let succSelfText = '';
  if (props.t.succSelf.length > 0) {
    succSelfText = succSelfText + 'On hit(self): ';
    for (let i = 0; i < props.t.succSelf.length; i++) {
      if (i > 0) { succSelfText = succSelfText + ', ' };
      succSelfText = succSelfText + props.t.succSelf[i];
    }
  }

  let failSelfText = '';
  if (props.t.failSelf.length > 0) {
    failSelfText = failSelfText + 'On miss(self): ';
    for (let i = 0; i < props.t.failSelf.length; i++) {
      if (i > 0) { failSelfText = failSelfText + ', ' };
      failSelfText = failSelfText + props.t.failSelf[i];
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
          {(traitsText === '') ? '' : <br />}
          {rangeText}
          {(rangeText === '') ? '' : <br />}
          {targetsText}
          {(targetsText === '') ? '' : <br />}
          {succSelfText}
          {(succSelfText === '') ? '' : <br />}
          {succTargText}
          {(succTargText === '') ? '' : <br />}
          {failSelfText}
          {(failSelfText === '') ? '' : <br />}
          {failTargText}
          {(failTargText === '') ? '' : <br />}
        </div>
      </button>
    )
  }
}
export default TechCard;