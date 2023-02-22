import '../App.css';

import Statbox from "./Statbox";

function TechCard(props) {
  let displayMe = false;
  let skillsBonus = [];
  let gearBonus = 0;
  let activeGear = ''

  if (props.searchTermT === '' || props.name.toLowerCase().includes(props.searchTermT.toLowerCase())) { displayMe = true; }


  if (props.searchTermS !== '') {
    displayMe = false;
    for (let i = 0; i < props.t.skills.length; i++) {
      if (Object.getOwnPropertyNames(props.t.skills[i])[0].toLowerCase().includes(props.searchTermS.toLowerCase())) { displayMe = true;}
    }

  }



  if (props.t.fh > props.userStat[1].BODY.hands) { displayMe = false; }
  if (displayMe === true) {
    if (props.t.skills.length > 0) {
      for (let i = 0; i < props.t.skills.length; i++) {
        let SBi = 0;
        {
          Object.keys(props.t.skills[i]).map((objKey, idx) => (
            displayMe = ((props.t.skills[i][objKey] > props.userAbl[objKey]) ? false : displayMe)
          ))
        }
        {
          Object.keys(props.t.skills[i]).map((objKey, idx) => (
            SBi += props.userAbl[objKey] - props.t.skills[i][objKey]
          ))
        }
        skillsBonus.push(SBi);
      }
    }
  }
  if (displayMe === true) {
    if (props.t.traits.length > 0) {
      displayMe = false;
      for (let gearIdx = 0; gearIdx < props.userGear.length; gearIdx++) {
        let thisGearGood = 0;
        let thisGearBonus = 0;
        for (let traitIdx = 0; traitIdx < props.t.traits.length; traitIdx++) {
          {
            Object.keys(props.t.traits[traitIdx]).map((objKey) => (
              thisGearGood += ((props.t.traits[traitIdx][objKey] <= props.userGear[gearIdx].GEAR[objKey]) ? 1 : 0)
            ))
          }
          {
            Object.keys(props.t.traits[traitIdx]).map((objKey) => (
              thisGearBonus += props.userGear[gearIdx].GEAR[objKey] - props.t.traits[traitIdx][objKey]
            ))
          }
          if (thisGearGood >= props.t.traits.length) {
            displayMe = true;
            if (gearBonus < thisGearBonus) {
              gearBonus = thisGearBonus;
              activeGear = props.userGear[gearIdx].name;
            }
          }
        }
      }
    }
  }




  if (displayMe) {

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
    let freeHandText = '';
    if (props.t.fh !== 0) {
      freeHandText = freeHandText + 'Free Hand';
      if (props.t.fh > 1) { freeHandText = freeHandText + 's' }
      freeHandText = freeHandText + ': ' + props.t.fh;
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
            skillsText = skillsText + objKey + " (" + props.t.skills[i][objKey] + ")"
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
            traitsText = traitsText + objKey + " (" + props.t.traits[i][objKey] + ")"
          ))
        }
      }
    }

    let rangeText = '';
    if (props.t.range.stat !== "") {
      rangeText = rangeText + 'Range (' + props.t.range.num + ' x ' + props.t.range.stat + '): ' + (props.userStat[0].STAT[props.t.range.stat] * props.t.range.num) + '\'';
    }
    else if (props.t.range.num !== "") {
      rangeText = rangeText + 'Range: ' + props.t.range.num + '\'';
    }
    let targetsText = '';
    if (props.t.targets.stat !== "") {
      targetsText = targetsText + 'Targets (' + props.t.targets.num + ' x ' + props.t.targets.stat + '): ' + (props.userStat[0].STAT[props.t.targets.stat] * props.t.targets.num);
    }
    else if (props.t.targets.num !== "") {
      targetsText = targetsText + 'Targets: ' + props.t.targets.num;
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
    let rollsText = ''
    let bonus = 10000000;
    if (props.t.defense !== '') {
      for (let i = 0; i < props.t.skills.length; i++) {
        if (skillsBonus[i] + gearBonus < bonus) { bonus = skillsBonus[i] + gearBonus; }
      }
      rollsText = rollsText + "D20+" + bonus + " vs " + props.t.defense + " defense";
    }
    if (bonus === 10000000) { bonus = 0; }

    return (
      <button className="Card" onClick={() => { let D20roll = Math.ceil(Math.random() * 20); alert('You rolled a ' + D20roll + " for a total of " + (D20roll + bonus)) }}>
        <div className="NameBox"> {props.name} </div>
        <div className="Techbar">
          {tagText}
          {(tagText === '') ? '' : <br />}
          {targetSizeText}
          {(targetSizeText === '') ? '' : <br />}
          {freeHandText}
          {(freeHandText === '') ? '' : <br />}
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
          {skillsText}
          {(skillsText === '') ? '' : <br />}
          {traitsText}
          {(traitsText === '') ? '' : <br />}
          {rollsText}
        </div>
      </button>
    )
  }
}
export default TechCard;