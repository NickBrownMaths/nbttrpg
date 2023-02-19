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

  const [injuryB, setInjuryB] = useState([]);
  const [addInjuryB, setAddInjuryB] = useState(null);
  const [delInjuryB, setDelInjuryB] = useState(null);
  const [injuryBB, setInjuryBB] = useState([]);
  const [addInjuryBB, setAddInjuryBB] = useState(null);
  const [delInjuryBB, setDelInjuryBB] = useState(null);
  const [injuryM, setInjuryM] = useState([]);
  const [addInjuryM, setAddInjuryM] = useState(null);
  const [delInjuryM, setDelInjuryM] = useState(null);
  const [injuryMM, setInjuryMM] = useState([]);
  const [addInjuryMM, setAddInjuryMM] = useState(null);
  const [delInjuryMM, setDelInjuryMM] = useState(null);

  const [stance, setStance] = useState(0);
  const [delStance, setDelStance] = useState(null);

  const [name, setName] = useState('Adventurer');
  const [level, setLevel] = useState(0);
  const [statblock, setStatblock] = useState(getStats(0, 0, 0, 0, 0, 0, [], [], [], [], [], 0));
  const [secondStat, setSecondStat] = useState(getSecondaryStats(getStats(0, 0, 0, 0, 0, 0, [], [], [], [], [], 0), []));
  const [levelUpMessage, setLevelUpMessage] = useState({});
  const [dataMessage, setDataMessage] = useState(null);

  useEffect(() => {
    setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, gear, injuryB, injuryBB, injuryM, injuryMM, stance));
    setLevel(1);
    setCharChoices([allStats.a[ancestry].name, allStats.b[background].name, allStats.c[culture].name, allStats.d[dream].name, allStats.e[eccentricity].name, allStats.f[flaw].name]);
  }, [ancestry, background, culture, dream, eccentricity, flaw, gear, injuryB, injuryBB, injuryM, injuryMM, stance]);

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
      setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, newGear, injuryB, injuryBB, injuryM, injuryMM, stance));
      setDelGear(null);
    }
  }, [delGear]);

  useEffect(() => {
    if (addInjuryB !== null) {
      setInjuryB([...injuryB, allStats.tib[addInjuryB]])
      setAddInjuryB(null);
    }
    if (addInjuryBB !== null) {
      setInjuryBB([...injuryBB, allStats.tibb[addInjuryBB]])
      setAddInjuryBB(null);
    }
    if (addInjuryM !== null) {
      setInjuryM([...injuryM, allStats.tim[addInjuryM]])
      setAddInjuryM(null);
    }
    if (addInjuryMM !== null) {
      setInjuryMM([...injuryMM, allStats.timm[addInjuryMM]])
      setAddInjuryMM(null);
    }
  }, [addInjuryB, addInjuryBB, addInjuryM, addInjuryMM]);

  useEffect(() => {
    if (delInjuryB !== null) {
      let newInjuryB = injuryB;
      let removedIB = newInjuryB.splice(delInjuryB, 1);
      setInjuryB(newInjuryB);
      setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, gear, newInjuryB, injuryBB, injuryM, injuryMM, stance));
      setDelInjuryB(null);
    }
    if (delInjuryBB !== null) {
      let newInjuryBB = injuryBB;
      let removedIBB = newInjuryBB.splice(delInjuryBB, 1);
      setInjuryBB(newInjuryBB);
      setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, gear, injuryB, newInjuryBB, injuryM, injuryMM, stance));
      setDelInjuryBB(null);
    }
    if (delInjuryM !== null) {
      let newInjuryM = injuryM;
      let removedIM = newInjuryM.splice(delInjuryM, 1);
      setInjuryM(newInjuryM);
      setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, gear, injuryB, injuryBB, newInjuryM, injuryMM, stance));
      setDelInjuryM(null);
    }
    if (delInjuryMM !== null) {
      let newInjuryMM = injuryMM;
      let removedIMM = newInjuryMM.splice(delInjuryMM, 1);
      setInjuryMM(newInjuryMM);
      setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw, gear, injuryB, injuryBB, injuryM, newInjuryMM, stance));
      setDelInjuryMM(null);
    }
  }, [delInjuryB, delInjuryBB, delInjuryM, delInjuryMM]);

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
  buttons.push([() => setCurrentPage('CC'), 'Character Creation',]);
  buttons.push([() => setCurrentPage('CL'), 'Character Load',]);
  buttons.push([() => setCurrentPage('CS'), 'Character Save',]);
  buttons.push([() => setCurrentPage('PP'), 'Play',]);

  return (
    <div className="SubDivsInCol">
      <NavBar buttons={buttons} />
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

        injuryB={injuryB} setAddInjuryB={setAddInjuryB} setDelInjuryB={setDelInjuryB}
        injuryBB={injuryBB} setAddInjuryBB={setAddInjuryBB} setDelInjuryBB={setDelInjuryBB}
        injuryM={injuryM} setAddInjuryM={setAddInjuryM} setDelInjuryM={setDelInjuryM}
        injuryMM={injuryMM} setAddInjuryMM={setAddInjuryMM} setDelInjuryMM={setDelInjuryMM}

        stance={stance} setStance={setStance} setDelStance={setDelStance} stanceData={allStats.ts[stance]}
      />
    </div>
  );
}

export default App;
