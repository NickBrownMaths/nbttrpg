import { useState, useEffect } from 'react';
import { AllStats, AllTechniques, getSecondaryStats, getStats, incrementStat } from './Utils/AllData';
import './App.css';
import NavBar from './components/NavBar';
import Page from './pages/Page.js';

function App() {
  const [currentPage, setCurrentPage] = useState('CC');

  const [allStats, setAllstats] = useState(new AllStats());

  const [ancestry, setAncestry] = useState(0);
  const [background, setBackground] = useState(0);
  const [culture, setCulture] = useState(0);
  const [dream, setDream] = useState(0);
  const [eccentricity, setEccentricity] = useState(0);
  const [flaw, setFlaw] = useState(0);
  const [charChoices, setCharChoices] = useState(['', '', '', '', '', '',]);

  const [gear, setGear] = useState([]);
  const [addGear, setAddGear] = useState(null);
  const [delGear, setDelGear] = useState(null);

  const [injury, setInjury] = useState([]);
  const [addInjury, setAddInjury] = useState(null);
  const [delInjury, setDelInjury] = useState(null);

  const [stance, setStance] = useState(0);
  const [delStance, setDelStance] = useState(null);

  const [name, setName] = useState('Adventurer');
  const [level, setLevel] = useState(0);
  const [statblock, setStatblock] = useState(getStats(0, 0, 0, 0, 0, 0, [], [], 0));
  const [secondStat, setSecondStat] = useState(getSecondaryStats(getStats(0, 0, 0, 0, 0, 0, [], [], 0), []));
  const [levelUpMessage, setLevelUpMessage] = useState({});
  const [dataMessage, setDataMessage] = useState(null);

  useEffect(() => {
    setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, gear, injury, stance));
    setLevel(1);
    setCharChoices([allStats.a[ancestry].name, allStats.b[background].name, allStats.c[culture].name, allStats.d[dream].name, allStats.e[eccentricity].name, allStats.f[flaw].name]);
  }, [ancestry, background, culture, dream, eccentricity, flaw, gear, injury, stance]);

  useEffect(() => {
    if (gear !== null) {
      setSecondStat(getSecondaryStats(statblock, gear));
    }
  }, [statblock]);

  useEffect(() => {
    if (addGear !== null) {
      let validAddGear = true;
      if (allStats.g[addGear].GEAR.armour > 0) {
        for (let i = 0; i < gear.length; i++) {
          if (gear[i].GEAR.armour > 0) { validAddGear = false; i = gear.length + 1 }
        }
      }

      if (allStats.g[addGear].GEAR.haft > 0) {
        if (secondStat.BODY.hands < 1) { validAddGear = false; }
      }

      if (validAddGear) { setGear([...gear, allStats.g[addGear]]); }
    }
    setAddGear(null);
  }, [addGear]);

  useEffect(() => {
    if (delGear !== null) {
      let newGear = gear;
      let removedGear = newGear.splice(delGear, 1);
      setGear(newGear);
      setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, newGear, injury, stance));
      setDelGear(null);
    }
  }, [delGear]);

  useEffect(() => {
    if (addInjury !== null) {
      setInjury([...injury, allStats.ib[addInjury]])
      setAddInjury(null);
    }
  }, [addInjury]);

  useEffect(() => {
    if (delInjury !== null) {
      let newInjury = injury;
      let removedIB = newInjury.splice(delInjury, 1);
      setInjury(newInjury);
      setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, gear, newInjury, stance));
      setDelInjury(null);
    }
  }, [delInjury]);

  useEffect(() => {
    setStatblock(incrementStat(statblock, levelUpMessage));
    setSecondStat(getSecondaryStats(statblock, gear));
    setLevel(level + 1);
  }, [levelUpMessage]);

  useEffect(() => {
    if (dataMessage) {
      let loadCharData = JSON.parse(dataMessage);
      setName(loadCharData.NAME);
      setLevel(loadCharData.LEVEL);
      setAncestry(loadCharData.A);
      setBackground(loadCharData.B);
      setCulture(loadCharData.C);
      setDream(loadCharData.D);
      setEccentricity(loadCharData.E);
      setFlaw(loadCharData.F);
      setStatblock(loadCharData.STATBLOCK);
      setCurrentPage('CC');
    }
  }, [dataMessage]);

  let buttons = [];
  buttons.push([() => setCurrentPage('GG'), 'Glossary',]);
  buttons.push([() => setCurrentPage('CC'), 'Character Editing',]);
  buttons.push([() => setCurrentPage('CL'), 'Character Load',]);
  buttons.push([() => setCurrentPage('CS'), 'Character Save',]);
  buttons.push([() => setCurrentPage('PP'), 'Play',]);

  return (
    <div className="SubDivsInCol">
      <NavBar buttons={buttons} buttonType='NavButton'/>
      <Page
        currentPage={currentPage}

        statblock={statblock}
        secondStat={secondStat}
        level={level}

        name={name}
        setName={setName}

        setAncestry={setAncestry}
        setBackground={setBackground}
        setCulture={setCulture}
        setDream={setDream}
        setEccentricity={setEccentricity}
        setFlaw={setFlaw}
        setGear={setGear}
        ancestry={ancestry}
        background={background}
        culture={culture}
        dream={dream}
        eccentricity={eccentricity}
        flaw={flaw}
        charChoices={charChoices}
        setLevelUpMessage={setLevelUpMessage}
        setDataMessage={setDataMessage}

        gear={gear}
        setAddGear={setAddGear}
        setDelGear={setDelGear}

        injury={injury} setAddInjury={setAddInjury} setDelInjury={setDelInjury}

        stance={stance} setStance={setStance} setDelStance={setDelStance} stanceData={allStats.ts[stance]}
      />
    </div>
  );
}

export default App;
