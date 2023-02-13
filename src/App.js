import { useState, useEffect } from 'react';
import { AllStats, getDefenses, getStats, incrementStat } from './Utils/AllData';
import './App.css';
import NavBar from './components/NavBar';
import Page from './pages/Page.js';

function App() {
  const [currentPage, setCurrentPage] = useState('CC');

  const [ancestry, setAncestry] = useState('');
  const [background, setBackground] = useState('');
  const [culture, setCulture] = useState('');
  const [dream, setDream] = useState('');
  const [eccentricity, setEccentricity] = useState('');
  const [flaw, setFlaw] = useState('');
  const [gear, setGear] = useState([]);
  const [addGear, setAddGear] = useState(null);
  const [delGear, setDelGear] = useState(null);

  const [name, setName] = useState('Adventurer');
  const [level, setLevel] = useState(0);
  const [statblock, setStatblock] = useState(getStats('', '', '', '', '', '',));
  const [defenses, setDefenses] = useState(getDefenses(getStats('', '', '', '', '', '',)));
  const [levelUpMessage, setLevelUpMessage] = useState({});
  const [dataMessage, setDataMessage] = useState(null);

  useEffect(() => {
    setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw));
    setLevel(1);
  }, [ancestry, background, culture, dream, eccentricity, flaw]);

  useEffect(() => {
    setStatblock(getStats(ancestry, background, culture, dream, eccentricity, flaw));
    setLevel(1);
  }, [ancestry, background, culture, dream, eccentricity, flaw]);

  useEffect(() => {
    setDefenses(getDefenses(statblock));
  }, [statblock]);

  useEffect(() => {
    if (addGear !== null) {
      let stats = new AllStats() ;
      for (let i = 0; i < stats.g.length ; i++) {
        if (stats.g[i].name === addGear) {
          setGear([...gear, stats.g[i]])
        }
      }
    }
    setAddGear(null);
  }, [addGear]);

  useEffect(() => {
    if (delGear !== null) {
      
      
      
      



      
      
      setDelGear(null);
    }
  }, [delGear]);

  useEffect(() => {
    setStatblock(incrementStat(statblock, levelUpMessage));
    setDefenses(getDefenses(statblock));
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
        defenses={defenses}
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
        gear={gear}
        setLevelUpMessage={setLevelUpMessage}
        setDataMessage={setDataMessage}
        setAddGear={setAddGear}
        setDelGear={setDelGear}
      />
    </div>
  );
}

export default App;
