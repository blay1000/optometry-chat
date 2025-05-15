import React, { useState } from 'react';

export default function Chatflow() {
  const [page, setPage] = useState(0);
  const [chiefComplaint, setChiefComplaint] = useState([]);
  const [historyOptions, setHistoryOptions] = useState({ intensity: '', duration: '', onset: '' , laterality: ''});
  const [AnteriorsegRE, setAnteriorsegRE] = useState({ eyelashes: '', eyelids: '', conjunctiva: '', cornea: '', anteriorchamber: '', iris: '', lens: '', pupil: '', rapd: '', limbus: ''});
  const [AnteriorsegLE, setAnteriorsegLE] = useState({ eyelashes: '', eyelids: '', conjunctiva: '', cornea: '', anteriorchamber: '', iris: '', lens: '', pupil: '', rapd: '', limbus: ''});
  const [PosteriorsegRE, setPosteriorsegRE] = useState({ virtreous: '', pallor: '', discshape: '', discmargin: '', isntrule: '', peripallaryregion: '', macula: '', peripheralretina:''});
  const [PosteriorsegLE, setPosteriorsegLE] = useState({ virtreous: '', pallor: '', discshape: '', discmargin: '', isntrule: '', peripallaryregion: '', macula: '', peripheralretina:''});
  const [ocularHistory, setOcularHistory] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [familyOcularHistory, setFamilyOcularHistory] = useState([]);
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState([]);
  const [vaRE, setVaRE] = useState('');
  const [vaLE, setVaLE] = useState('');
  const [iopRE, setIopRE] = useState('');
  const [iopLE, setIopLE] = useState('');
  const [Discharge, setDischarge] = useState('');
  const [conjunctiva, setConjunctiva] = useState('');
  const [diagnosis, setDiagnosis] = useState([]);
  const [IndirectQuestions, setIndirectQuestions] = useState('')
  const [Allergies, setAllergies] = useState('')
  const [DrugHistory, setDrugHistory] = useState ('')
  const [SocialHistory, setSocialHistory] = useState ('')
  const [Vitals, setVitals] = useState ('')
  const [Age, setAge] = useState ('')
  const [Ocupation, setOccupation] = useState ('') 
  const [Gender, setGender] = useState ('')
  const [CDratioRE, setCDratioRE] =useState ('')
  const [CDratioLE, setCDratioLE] =useState ('')
  const [NearVaRE,setNearRE]= useState ('')
  const [NearVaLE,setNearLE]= useState ('')
  const [name, setName] = useState('');
  
  const symptoms = ['Pain', 'Redness','Itchiness', 'Tearing', 'Gritty Sensation', 'Discharge','Lump', 'Blurry Vision', 'Headache','Vision Loss','Double Vision','Photophobia','Eyestrain','Floaters','Flashes'];
  const intensityOptions = ['Mild', 'Moderate', 'Severe'];
  const durationOptions = ['Less than 24h', '1–3 days', 'More than 3 days'];
  const onsetOptions = ['Sudden', 'Gradual', 'Intermittent'];
  const LateralityOptions = ['Left Eye', 'Right Eye', 'Both Eyes'];
  const ocularConditions = ['Cataract', 'Glaucoma','Amblyopia','Strabismus','Spectacle Wear','Contact Lens wear','Ocular Surgery','No Known History'];
  const familyocularConditions =['Glaucoma','Cataract','Blindness','Spectacle Wear','Macular Degeneration','Retinal Detachment','No Known History']
  const familymedicalConditions =['Diabetes', 'Hypertension', 'Sickle Cell Anemia', 'Asthma', 'No Known History']
  const medicalConditions = ['Diabetes', 'Hypertension', 'Sickle Cell Anemia', 'Asthma', 'STI','Viral Infection','No known History'];
  const vaOptions = ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', 'CF','HM','PL','NPL'];
  const nearVaoptions =['N5', 'N6', 'N8', 'N10', 'N12', 'N18', 'N24', 'N36'];
  const iopOptions = ['10-21 mmHg', 'Greater than 21 mmHg', 'Less than 10 mmHg'];
  const IndirectQuestionsOptions =['Redness', 'Pain','Haloes','Foreign Body Sensation','Tearing','Burning Sensation','Floaters','Recent Trauma','Flashes','Headache','None']
  const allergies = ['Dust','Food Allergy','Smoke','Pollen','Animal Fur','Perfume','No Known Allergies']
  const drughistory = ['Anti-hypertensives', 'Anti-Psychotics', 'Anti-Diabetics','Immunosuppressives','Not On Any Medication']
  const socialhistory =['Alcoholic','Smoker','None']
  const vitals =['Below 120/80mmHg','120/80-129/90mmHg','Above 130/90mmHg']
  const age = ['Under 18', '18–24','25–34','35–44', '45–54', '55–64', '65 or older']
  const occupation = ['Student', 'Office Based Occupation','Outdoor and Field-Based Occupations',' Skilled Manual Jobs','Others']
  const gender =['Male','Female','Other']
  const eyelashoptions =['No Abnormalies','Misdirection','Madarosis','Invertion','Matting','Crusting']
  const eyelidoptions =['No Abnormalies', 'Swollen','Drooping','Retraction']
  const conjoptions =['No Abnormalies', 'Congestion','Hyperemia', 'Chemosis','Papillae', 'Follicles', 'Growth','Haemorrhage','Cicatrization']
  const anteriorchamberoptions = ['No Abnormalies','Deep','Shallow','Hyphemia','Aqueous Flare','Hypopyon']
  const irisoptions =['No Abnormalies','Atrophy','Coloboma','Neovascularization','Bombe','Heterochromia']
  const lensoptions =['Transparent','Cloudy','Opaque','Cortical Spokes']
  const pupiloption =['Round','Equal','Reactive']
  const rapdoption =['Present','Absent']
  const corneaoptions =['No Abnormalities','Pannus','KPs','Positive Fluorescein Stain','Infiltration','Ectasia']
  const limbusoptions =['No Abnormalities','Hypertrophy','Pigmention','Trantas Dots']
  const virtreousoptions =['No Abnormalities','Haemorrhage','Opacities','Syneresis','PVD','Vissible Inflammatory Cells']
  const palloroptions =['Absent','Mild','Severe']
  const discsizeoptions =['Small','Medium','Large']
  const discmarginoptions =['Undefined','Well Defined']
  const isntruleoptions =['Obyed','Not Obyed']
  const peripapillaryregionoption =['No Abnormailities','Alpha Zone Atrophy','Beta Zone Atrophy']
  const maculaoptions =['No Abnormalities','Edema','Scar']
  const peripheralretinaoptions=['No Abnomalities','Retinal Detachment','Chorioretinal Scars']
  const cdratiooptions =['0.1','0.2','0.3','0.4','0.5','0.6','0.7','Above 0.8']
  const Dischargeoptions=['No Discharge','Mucopurulent','Purulent','Serous','Watery','Mucoid']
  
  const toggleArray = (arr, setter, value) =>
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
 
                                                      ///DIAGNOSIS//
                            //////////////////////PRESBYOPIA///////////////////////////
  const checkForPresbyopia = () => {
  const hasNearVisionIssues = chiefComplaint.includes('Blurry Vision') || chiefComplaint.includes('Eyestrain');
  const isAgeAbove40 = ['45–54', '55–64', '65 or older'].includes(Age);
  const isNearVAImpaired = ['N8', 'N10', 'N12', 'N18', 'N24', 'N36']
  const isValidOcularHistory = ['No Known History', 'Spectacle Wear'].some(h => ocularHistory.includes(h));
  const isValidVA = isNearVAImpaired.includes(NearVaRE) || isNearVAImpaired.includes(NearVaLE);
    
    console.log('Presbyopia Check:', {
    hasNearVisionIssues,
    isAgeAbove40,
    isNearVAImpaired,
    isValidOcularHistory,
  });

  return hasNearVisionIssues &&
    isAgeAbove40 &&
    isNearVAImpaired &&
    isValidOcularHistory
};
  
                         ///////////////////////MYOPIA///////////////////// 
const checkForMyopia = () => {
  const validVA = ['6/18', '6/24', '6/36', '6/60'];
  
  const hasBlurryVisionOrHeadache =
    chiefComplaint.includes('Blurry Vision') || chiefComplaint.includes('Headache') || chiefComplaint.includes('Eyestrain');

  const isValidODQ =
    ['Headache', 'None'].some(h => IndirectQuestions.includes(h));

  const isValidOcularHistory =
    ['Spectacle Wear', 'Contact Lens wear', 'No History','Cataract'].some(h => ocularHistory.includes(h));

  const isValidMedicalHistory =
    ['Diabetes', 'No Known History'].some(h => medicalHistory.includes(h)  );

   const validCorneaRE = AnteriorsegRE?.cornea?.some(item =>
  ['No Abnormalities', 'Ectasia'].includes(item) );
   const validCorneaLE = AnteriorsegLE?.cornea?.some(item =>
  ['No Abnormalities', 'Ectasia'].includes(item) );
  
  const isValidVA = validVA.includes(vaRE) || validVA.includes(vaLE);

  console.log('Myopia Check:', {
    hasBlurryVisionOrHeadache,
    isValidODQ,
    isValidOcularHistory,
    isValidMedicalHistory,
    validCorneaLE,
    validCorneaRE,
    isValidVA
  });

  return (
    hasBlurryVisionOrHeadache &&
    isValidODQ &&
    isValidOcularHistory &&
    isValidMedicalHistory &&
    validCorneaLE &&
    validCorneaRE &&
    isValidVA
  );
};
  ///////////////////////GLAUCOMA SUSPECT////////////////// 
const checkForGlaucomaSuspect = () => {

const validCDR = ['0.5', '0.6', '0.7', 'Above 0.8'];
  
const isValidCDratiO= validCDR.includes(CDratioRE)||validCDR.includes(CDratioLE);

console.log('Glaucoma Suspect Check:', {
    isValidCDratiO
  });

  return (
    isValidCDratiO
  );
};




  const checkForConjunctivitis = () => {
  const hasRedness = chiefComplaint.includes('Redness');
  const hasDischargeOrTearing = chiefComplaint.includes('Discharge') || chiefComplaint.includes('Tearing');
  const isSudden = historyOptions.onset === 'Sudden';
  const isShortDuration = ['Less than 24h', '1–3 days'].includes(historyOptions.duration);
  const isMildOrModerate = ['Mild', 'Moderate'].includes(historyOptions.intensity);

  console.log('Conjunctivitis check:', {
    hasRedness,
    hasDischargeOrTearing,
    isSudden,
    isShortDuration,
    isMildOrModerate,
  });

  return hasRedness && hasDischargeOrTearing && isSudden && isShortDuration && isMildOrModerate;
};


                          /////////ALLERGIC CONJUNCTIVITIS///////////
const checkForAllergicConjunctivitis = () => {
  const hasItchiness = chiefComplaint.includes('Itchiness');
  const hasRedness = chiefComplaint.includes('Redness');
  const isIntermittentOnset = historyOptions.onset === 'Intermittent';
  const isShortDuration = ['Less than 24h', '1–3 days'].includes(historyOptions.duration);
  const hasKnownAllergies = ['Dust', 'Pollen', 'Animal Fur', 'Perfume'].some(allergy =>
    Allergies.includes(allergy)
  );
  
  const hasConjunctivalChangesRE = AnteriorsegRE?.conjunctiva?.some(item =>
  ['Hyperemia', 'Chemosis'].includes(item) );
const hasConjunctivalChangesLE = AnteriorsegLE?.conjunctiva?.some(item =>
  ['Hyperemia', 'Chemosis'].includes(item) );

console.log('Allergic Conjunctivitis check:', {
  hasItchiness,
  hasRedness,
  isIntermittentOnset,
  isShortDuration,
  hasKnownAllergies,
  hasConjunctivalChangesRE,
  hasConjunctivalChangesLE,
  conjunctivaRE: AnteriorsegRE?.conjunctiva,
  conjunctivaLE: AnteriorsegLE?.conjunctiva,
  allergies: Allergies,
});


return hasItchiness &&
    hasRedness &&
    isIntermittentOnset &&
    isShortDuration &&
    hasKnownAllergies &&
    hasConjunctivalChangesRE &&
    hasConjunctivalChangesLE
};
                                      

  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleSubmit = () => {
  const hasConjunctivitis = checkForConjunctivitis();
  const hasAllergicConjunctivitis = checkForAllergicConjunctivitis();
  const hasMyopia = checkForMyopia();
  const hasPresbyopia = checkForPresbyopia();
  const  hasGlaucomaSuspect= checkForGlaucomaSuspect();

  console.log('Diagnosis flags:', {
    hasConjunctivitis,
    hasAllergicConjunctivitis,
    hasMyopia,
    hasPresbyopia,
  });

  const diagnoses = [];
  if (hasConjunctivitis) {
    diagnoses.push('Conjunctivitis');
  }
  if (hasAllergicConjunctivitis) {
    diagnoses.push('Allergic Conjunctivitis');
  }
  if (hasMyopia) {
    diagnoses.push('Myopia');
  }
  if (hasPresbyopia) {
    diagnoses.push('Presbyopia');
  }
  if (hasGlaucomaSuspect) {
    diagnoses.push('Glaucoma Suspect');
  }
  if (diagnoses.length > 0) {
    setDiagnosis(diagnoses.map(d => `${d}`));
  } else {
    setDiagnosis(['No clear diagnosis']);
  }
  setPage(17);
};
  const handleNext = () => setPage(p => p + 1);
  const handlePrev = () => setPage(p => Math.max(0, p - 1))


  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Helvetica Neue', Arial, sans-serif; }
        .header { background: #000; color: #fff; display: flex; justify-content: center; align-items: center; padding: 1rem; }
        .logo { width: 40px; height: 40px; margin-right: 0.75rem; filter: invert(1); }
        .title { font-family: 'Cathorix', sans-serif; font-size: 2rem; font-weight: bold; letter-spacing: 1px; }
        .container { max-width: 600px; margin: 2rem auto; padding: 1rem; }
        .section-title { font-size: 2rem; text-align: center; margin-bottom: 1rem; }
        .option-list { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; }
        .option { flex: 1 1 calc(50% - 1rem); background: #f9f9f9; border: 1px solid #000; border-radius: 8px; padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: background 0.2s; }
        .option:hover { background: #e0e0e0; }
        .card { border: 1px solid #000; border-radius: 8px; padding: 0.75rem; flex: 1 1 100%; margin-bottom: 1rem; }
        .legend { padding: 0 0.5rem; font-weight: bold; }
        .button-group { display: flex; gap: 1rem; justify-content: flex-end; }
        .button { background: #000; color: #fff; border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 1rem; cursor: pointer; transition: background 0.2s; }
        .button.primary { background: #000; }
        .footer { text-align: center; margin-top: 10rem; font-size: 0.700rem; color: #666; }
        .footer a { color: #0078d4; text-decoration: none; }
        .footer a:hover { text-decoration: underline; }
        .button:hover { background: #333; }
        .review {word-wrap: break-word;text-align: center;font-size: 1rem; background: #f9f9f9; border: 5px solid #000; border-radius: 10px; padding: 2rem; margin-bottom: 2rem; }
        .intro { background: transparent; color: #000; border-radius: 8px; padding: 2rem; text-align: center; }
        .intro-header { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1rem; }
        .intro .logo { width: 70px; height: 70px; filter: none; margin: 0; }
        .intro h1 { font-family: 'Cathorix', sans-serif; font-size: 3rem; font-weight: bold; letter-spacing: 1px; margin: 0; }
        .intro-text { font-size: 0.67rem; color: #666; margin-bottom: 2rem; font-style: italic; }
        .intro .arrow-btn { font-size: 2rem; background: transparent; border: 2px solid #000; color: #000; border-radius: 50%; width: 3rem; height: 3rem; cursor: pointer; transition: background 0.3s, transform 0.3s; }
        .intro .arrow-btn:hover { background: #000; color: #fff; transform: scale(1.1); }
        @media (max-width: 480px) {
          .option { flex: 1 1 100%; }
          .button-group { flex-direction: column; }
          .button { width: 100%; }
        }
      `}</style>

      {page > 0 && (
        <header className="header">
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/709/709614.png" alt="eyeDeal Eye" />
          <h1 className="title">eyeDeal</h1>
        </header>
      )}

      <div className="container">
        {page === 0 && (
          <div className="intro">
            <div className="intro-header">
              <img className="logo" src="https://cdn-icons-png.flaticon.com/512/709/709614.png" alt="eyeDeal Eye" />
              <h1>eyeDeal</h1>
            </div>
            <p className="intro-text">© 2025 Buabeng Godfred, Optometry Student, KNUST</p>
            <button className="arrow-btn" onClick={handleNext} aria-label="Start">→</button>
          </div>
        )}

        {page === 3 && (
          <>
            <h2 className="section-title">Chief Complaint</h2>
            <div className="option-list">
              {symptoms.map(s => (
                <label key={s} className="option">
                  <input type="checkbox" checked={chiefComplaint.includes(s)} onChange={() => toggleArray(chiefComplaint, setChiefComplaint, s)} />
                  {s}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
              {chiefComplaint.length > 0 && (
              <button className="button primary" onClick={handleNext}>Next</button>  
            )}
            </div>
          </>
        )}

        {page === 4 && (
          <>
            <h2 className="section-title">History of Presenting Complaint</h2>
            <div className="option-list">
              {['intensity', 'duration', 'onset','laterality'].map(sec => {
                const opts = sec === 'intensity' ? intensityOptions : sec === 'duration' ? durationOptions : sec=='laterality' ? LateralityOptions :onsetOptions;
                return (
                  <fieldset key={sec} className="card">
                    <legend className="legend">{sec.charAt(0).toUpperCase() + sec.slice(1)}</legend>
                    {opts.map(o => (
                      <label key={o} className="option">
                        <input type="radio" name={sec} checked={historyOptions[sec] === o} onChange={() => setHistoryOptions(h => ({ ...h, [sec]: o }))} />
                        {o}
                      </label>
                    ))}
                  </fieldset>
                );
              })}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
              {['intensity', 'duration', 'onset', 'laterality'].every(sec => historyOptions[sec]) && (
        <button className="button primary" onClick={handleNext}>Next</button>
      )}
    </div>
  </>
)}

        {page === 6 && (
          <>
            <h2 className="section-title">Patient Ocular History</h2>
            <div className="option-list">
              {ocularConditions.map(c => (
                <label key={c} className="option">
                  <input type="checkbox" checked={ocularHistory.includes(c)} onChange={() => toggleArray(ocularHistory, setOcularHistory, c)} />
                  {c}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
               {ocularHistory.length > 0 && (
              <button className="button primary" onClick={handleNext}>Next</button>  
            )}
            </div>
          </>
        )}

        {page === 7 && (
          <>
            <h2 className="section-title">Patient Medical History</h2>
            <div className="option-list">
              {medicalConditions.map(c => (
                <label key={c} className="option">
                  <input type="checkbox" checked={medicalHistory.includes(c)} onChange={() => toggleArray(medicalHistory, setMedicalHistory, c)} />
                  {c}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
              {medicalHistory.length > 0 && (
              <button className="button primary" onClick={handleNext}>Next</button>  
            )}
            </div>
          </>
        )}

      {page === 5 && (
  <>
    <h2 className="section-title">ODQ</h2>

    <div className="option-list">
      {IndirectQuestionsOptions.map(s => (
        <label key={s} className="option">
          <input
            type="checkbox"
            checked={IndirectQuestions.includes(s)}
            onChange={() => toggleArray(IndirectQuestions, setIndirectQuestions, s)}
          />
          {s}
        </label>
      ))}
      <label className="option">
        <select value={Discharge} onChange={e => setDischarge(e.target.value)}>
          <option value="">Discharge</option>
          {Dischargeoptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </label>
    </div>

    <div className="button-group">
      <button className="button" onClick={handlePrev}>Previous</button>
      {IndirectQuestions.length > 0 && (
        <button className="button primary" onClick={handleNext}>Next</button>
      )}
    </div>
  </>
)}


        {page === 10 && (
          <>
            <h2 className="section-title">Allergies</h2>
            <div className="option-list">
              {allergies.map(s => (
                <label key={s} className="option">
                  <input type="checkbox" checked={Allergies.includes(s)} onChange={() => toggleArray(Allergies, setAllergies, s)} />
                  {s}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
               {Allergies.length > 0 && (
              <button className="button primary" onClick={handleNext}>Next</button>  
            )}
            </div>
          </>
        )}

        {page === 11 && (
          <>
            <h2 className="section-title">Drug History</h2>
            <div className="option-list">
              {drughistory.map(s => (
                <label key={s} className="option">
                  <input type="checkbox" checked={DrugHistory.includes(s)} onChange={() => toggleArray(DrugHistory, setDrugHistory, s)} />
                  {s}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
              {DrugHistory.length > 0 && (
              <button className="button primary" onClick={handleNext}>Next</button>  
            )}
            </div>
          </>
        )}


        {page === 12 && (
          <>
            <h2 className="section-title">Social History</h2>
            <div className="option-list">
              {socialhistory.map(s => (
                <label key={s} className="option">
                  <input type="checkbox" checked={SocialHistory.includes(s)} onChange={() => toggleArray(SocialHistory, setSocialHistory, s)} />
                  {s}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
               {SocialHistory.length > 0 && (
              <button className="button primary" onClick={handleNext}>Next</button>  
            )}
            </div>
          </>
        )}

        
        
        {page === 8 && (
          <>
            <h2 className="section-title">Family Ocular History</h2>
            <div className="option-list">
              {familyocularConditions.map(c => (
                <label key={c} className="option">
                  <input type="checkbox" checked={familyOcularHistory.includes(c)} onChange={() => toggleArray(familyOcularHistory, setFamilyOcularHistory, c)} />
                  {c}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
               {familyOcularHistory.length > 0 && (
              <button className="button primary" onClick={handleNext}>Next</button>  
            )}
            </div>
          </>
        )}

        {page === 9 && (
          <>
            <h2 className="section-title">Family Medical History</h2>
            <div className="option-list">
              {familymedicalConditions.map(c => (
                <label key={c} className="option">
                  <input type="checkbox" checked={familyMedicalHistory.includes(c)} onChange={() => toggleArray(familyMedicalHistory, setFamilyMedicalHistory, c)} />
                  {c}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
               {familyMedicalHistory.length > 0 && (
              <button className="button primary" onClick={handleNext}>Next</button>  
            )}
            </div>
          </>
        )}

        {page === 2 && (
          <>
            <h2 className="section-title">Intake Examinations</h2>
            <div className="option-list">
              <label className="option">
                <select value={vaRE} onChange={e => setVaRE(e.target.value)}>
                  <option value="">Distance VA (RE)</option>
                  {vaOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </label>
              <label className="option">
                  <select value={vaLE} onChange={e => setVaLE(e.target.value)}>
                  <option value="">Distance VA (LE)</option>
                  {vaOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
               </select>
                </label>
              <label className="option">
                  <select value={NearVaRE} onChange={e => setNearRE(e.target.value)}>
                  <option value="">Near VA (RE)</option>
                  {nearVaoptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}    
                </select>
                </label>
              <label className="option">
                  <select value={NearVaLE} onChange={e => setNearLE(e.target.value)}>
                  <option value=""> Near VA (LE)</option>
                  {nearVaoptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
              </label>
              <label className="option">
                <select value={iopRE} onChange={e => setIopRE(e.target.value)}>
                  <option value="">IOP (RE)</option>
                  {iopOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </label>
                  <label className="option">
                <select value={iopLE} onChange={e => setIopLE(e.target.value)}>
                  <option value="">IOP (LE)</option>
                  {iopOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
              </label>
              <label className="option">
                <select value={Vitals} onChange={e => setVitals(e.target.value)}>
                  <option value="">Blood Pressure</option>
                  {vitals.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </label>
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
              <button className="button primary" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {page === 1 && (
          <>
            <h2 className="section-title">Demographics</h2>
            <div className="option-list">
              <label className="option">
             <input
             type="text" placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            </label>
              <label className="option">
                <select value={Age} onChange={e => setAge(e.target.value)}>
                  <option value="">Age</option>
                  {age.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </label>
              <label className="option">
                <select value={Gender} onChange={e => setGender(e.target.value)}>
                  <option value="">Gender</option>
                  {gender.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </label>
              <label className="option">
                <select value={Ocupation} onChange={e => setOccupation(e.target.value)}>
                  <option value="">Occupation</option>
                  {occupation.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </label>
            </div>
            <div className="button-group">
              
              <button className="button primary" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {page === 13 && (
          <>
            <h2 className="section-title">Anterior Segment Examination(RE)</h2>
            <div className="option-list">
              {['eyelashes','eyelids','conjunctiva','cornea','anterior chamber','iris','lens','pupil','RAPD','limbus'].map(sec => {
                const opts = sec === 'eyelashes' ? eyelashoptions : sec === 'eyelids' ? eyelidoptions : sec=='conjunctiva' ? conjoptions : sec=='cornea' ? corneaoptions : sec=='anterior chamber' ? anteriorchamberoptions : sec=='iris' ? irisoptions : sec=='lens' ? lensoptions : sec=='pupil' ? pupiloption : sec=='RAPD' ? rapdoption : sec=='limbus' ? limbusoptions:onsetOptions;
                return (
                  <fieldset key={sec} className="card">
            <legend className="legend">{sec.charAt(0).toUpperCase() + sec.slice(1)}</legend>
            {opts.map(o => (
              <label key={o} className="option">
                <input
                  type="checkbox"
                  name={sec}
                  checked={AnteriorsegRE[sec]?.includes(o)} // Ensure we handle multiple selections
                  onChange={() => {setAnteriorsegRE(h => {
                      const updatedSec = h[sec] || [];
                      if (updatedSec.includes(o)) {
                        return { ...h, [sec]: updatedSec.filter(option => option !== o) };
                      } else {
                        return { ...h, [sec]: [...updatedSec, o] };
                      }
                    });
                  }}
                />
                {o}
              </label>
            ))}
          </fieldset>
        );
      })}
    </div>
    <div className="button-group">
      <button className="button" onClick={handlePrev}>Previous</button>
      {['eyelashes', 'eyelids', 'conjunctiva', 'cornea', 'anterior chamber', 'iris', 'lens', 'pupil', 'RAPD', 'limbus']
        .every(sec => Array.isArray(AnteriorsegRE[sec]) && AnteriorsegRE[sec].length > 0) && (
        <button className="button primary" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  </>
)} 
    
        {page === 14 && (
          <>
            <h2 className="section-title">Anterior Segment Examination(LE)</h2>
            <div className="option-list">
              {['eyelashes','eyelids','conjunctiva','cornea','anterior chamber','iris','lens','pupil','RAPD','limbus'].map(sec => {
                const opts = sec === 'eyelashes' ? eyelashoptions : sec === 'eyelids' ? eyelidoptions : sec=='conjunctiva' ? conjoptions : sec=='cornea' ? corneaoptions : sec=='anterior chamber' ? anteriorchamberoptions : sec=='iris' ? irisoptions : sec=='lens' ? lensoptions : sec=='pupil' ? pupiloption : sec=='RAPD' ? rapdoption : sec=='limbus' ? limbusoptions:onsetOptions;
                return (
                  <fieldset key={sec} className="card">
            <legend className="legend">{sec.charAt(0).toUpperCase() + sec.slice(1)}</legend>
            {opts.map(o => (
              <label key={o} className="option">
                <input
                  type="checkbox"
                  name={sec}
                  checked={AnteriorsegLE[sec]?.includes(o)} 
                  onChange={() => {setAnteriorsegLE(h => {
                      const updatedSec = h[sec] || [];
                      if (updatedSec.includes(o)) {
                        return { ...h, [sec]: updatedSec.filter(option => option !== o) };
                      } else {
                        return { ...h, [sec]: [...updatedSec, o] };
                      }
                    });
                  }}
                />
                {o}
              </label>
            ))}
          </fieldset>
        );
      })}
    </div>
    <div className="button-group">
      <button className="button" onClick={handlePrev}>Previous</button>
      {['eyelashes', 'eyelids', 'conjunctiva', 'cornea', 'anterior chamber', 'iris', 'lens', 'pupil', 'RAPD', 'limbus']
        .every(sec => Array.isArray(AnteriorsegLE[sec]) && AnteriorsegLE[sec].length > 0) && (
        <button className="button primary" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  </>
)}
        {page === 15 && (
          <>
            <h2 className="section-title">Posterior Segment Examination(RE)</h2>
            <div className="option-list">
              {['virtreous', 'pallor', 'disc size','disc margin','ISNT rule','peripallary region','macula','peripheral retina'].map(sec => {
                const opts = sec === 'virtreous' ? virtreousoptions : sec === 'pallor' ? palloroptions : sec=='disc size' ? discsizeoptions : sec=='disc margin' ? discmarginoptions : sec=='ISNT rule' ? isntruleoptions : sec=='peripallary region' ? peripapillaryregionoption : sec=='macula' ? maculaoptions: sec=='peripheral retina' ? peripheralretinaoptions:[];
                return (
                  <fieldset key={sec} className="card">
            <legend className="legend">{sec.charAt(0).toUpperCase() + sec.slice(1)}</legend>
            {opts.map(o => (
              <label key={o} className="option">
                <input
                  type="checkbox"
                  name={sec}
                  checked={PosteriorsegRE[sec]?.includes(o)} // Ensure we handle multiple selections
                  onChange={() => {setPosteriorsegRE(h => {
                      const updatedSec = h[sec] || [];
                      if (updatedSec.includes(o)) {
                        return { ...h, [sec]: updatedSec.filter(option => option !== o) };
                      } else {
                        return { ...h, [sec]: [...updatedSec, o] };
                      }
                    });
                  }}
                />
                {o}
              </label>
            ))}
          </fieldset>
                );
              })}
            </div>
            <div className="button-group">
            </div>
          </>
        )}

        {page === 15 && (
          <>
            <h2 className="section-title"></h2>
            <div className="option-list">
              <label className="option">
                <select value={CDratioRE} onChange={e => setCDratioRE(e.target.value)}>
                  <option value="">CD Ratio</option>
                  {cdratiooptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </label>
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
        {[ 'virtreous', 'pallor', 'disc size', 'disc margin',
        'ISNT rule', 'peripallary region', 'macula', 'peripheral retina'
      ].every(sec => Array.isArray(PosteriorsegRE[sec]) && PosteriorsegRE[sec].length > 0) &&
        CDratioRE !== '' && (
          <button className="button primary" onClick={handleNext}>Next</button>
      )}
       </div>
          </>
        )}

        {page === 16 && (
          <>
            <h2 className="section-title">Posterior Segment Examination(LE)</h2>
            <div className="option-list">
              {['virtreous', 'pallor', 'disc size','disc margin','ISNT rule','peripallary region','macula','peripheral retina'].map(sec => {
                const opts = sec === 'virtreous' ? virtreousoptions : sec === 'pallor' ? palloroptions : sec=='disc size' ? discsizeoptions : sec=='disc margin' ? discmarginoptions : sec=='ISNT rule' ? isntruleoptions : sec=='peripallary region' ? peripapillaryregionoption : sec=='macula' ? maculaoptions: sec=='peripheral retina' ? peripheralretinaoptions:[];
                return (
                  <fieldset key={sec} className="card">
            <legend className="legend">{sec.charAt(0).toUpperCase() + sec.slice(1)}</legend>
            {opts.map(o => (
              <label key={o} className="option">
                <input
                  type="checkbox"
                  name={sec}
                  checked={PosteriorsegLE[sec]?.includes(o)} // Ensure we handle multiple selections
                  onChange={() => {setPosteriorsegLE(h => {
                      const updatedSec = h[sec] || [];
                      if (updatedSec.includes(o)) {
                        return { ...h, [sec]: updatedSec.filter(option => option !== o) };
                      } else {
                        return { ...h, [sec]: [...updatedSec, o] };
                      }
                    });
                  }}
                />
                {o}
              </label>
            ))}
          </fieldset>
                );
              })}
            </div>
            <div className="button-group">
            </div>
          </>
        )}

        {page === 16 && (
          <>
            <h2 className="section-title"></h2>
            <div className="option-list">
              <label className="option">
                <select value={CDratioLE} onChange={e => setCDratioLE(e.target.value)}>
                  <option value="">CD Ratio</option>
                  {cdratiooptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </label>
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
              {[ 'virtreous', 'pallor', 'disc size', 'disc margin',
        'ISNT rule', 'peripallary region', 'macula', 'peripheral retina'
      ].every(sec => Array.isArray(PosteriorsegLE[sec]) && PosteriorsegLE[sec].length > 0) &&
        CDratioRE !== '' && (
          <button className="button primary" onClick={handleSubmit}>Next</button>
      )}
       </div>
          </>
        )}
      
        {page === 17  && (
          <div className="review">
            <h2>Possible Diagnosis</h2>
            <div>
           {diagnosis.map((d, i) => (
              <p key={i}>{d}</p>
         ))}
            </div>
            <div className="button-group"style={{ marginTop: '10rem' }}>
              <button className="button" onClick={handlePrev}>Previous</button>
              <button
        className="button"
        onClick={() => {
    setChiefComplaint('');
    setAllergies('');
    setDiagnosis('');
    setConjunctiva('');
    setVaRE([]);
    setVaLE([]);
    setFamilyMedicalHistory('');
    setFamilyOcularHistory('');
    setMedicalHistory('');
    setOcularHistory('');
    setPosteriorsegLE({});
    setPosteriorsegRE({});
    setAnteriorsegLE({});
    setAnteriorsegRE({});
    setCDratioLE([]);
    setCDratioRE([]);
    setGender([]);
    setOccupation([]);
    setAge([]);
    setVitals({});
    setIopRE([]);
    setIopLE([]);
    setDischarge([]);
    setSocialHistory('')
    setDrugHistory('')
    setIndirectQuestions('')
    setHistoryOptions({})
    
    setPage(1);
        }}
      >
        Start Over
      </button>
    </div>
    <p className="footer">DISCLAIMER: For Assessment Support Only</p>     
  </div>
)}
     </div>
    </>
  );
}



