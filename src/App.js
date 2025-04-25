import React, { useState } from 'react';

export default function Chatflow() {
  const [page, setPage] = useState(0);
  const [chiefComplaint, setChiefComplaint] = useState([]);
  const [historyOptions, setHistoryOptions] = useState({ intensity: '', duration: '', onset: '' });
  const [medicalHistory, setMedicalHistory] = useState([]);

  const symptoms = ['Pain', 'Redness', 'Tearing', 'Gritty Sensation', 'Discharge', 'Blurry Vision'];
  const intensityOptions = ['Mild', 'Moderate', 'Severe'];
  const durationOptions = ['Less than 24h', '1–3 days', 'More than 3 days'];
  const onsetOptions = ['Sudden', 'Gradual', 'Intermittent'];
  const medicalConditions = ['Diabetes', 'Hypertension', 'Sickle Cell Anemia', 'Asthma', 'Glaucoma'];

  const toggleArray = (arr, setter, value) =>
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);

  const handleNext = () => setPage(p => p + 1);
  const handlePrev = () => setPage(p => Math.max(1, p - 1));

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Helvetica Neue', Arial, sans-serif; }
        /* Header (pages 1+) */
        .header { background: #000; color: #fff; display: flex; justify-content: center; align-items: center; padding: 1rem; }
        .logo { width: 40px; height: 40px; margin-right: 0.75rem; filter: invert(1); }
        .title { font-size: 1.5rem; }
        /* Container */
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
        .button:hover { background: #333; }
        .review { background: #f9f9f9; border: 1px solid #000; border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem; }

        /* Page 0 dark and white theme, transparent bg */
        .intro { background: transparent; color: #000; border-radius: 8px; padding: 2rem; text-align: center; }
        .intro .logo { width: 60px; height: 60px; margin-bottom: 1rem; filter: none; }
        .intro h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .intro p { font-size: 1rem; color: #333; margin-bottom: 2rem; }
        .intro .arrow-btn {
          font-size: 2rem;
          background: transparent;
          border: 2px solid #000;
          color: #000;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .intro .arrow-btn:hover { background: #000; color: #fff; transform: scale(1.1); }

        @media (max-width: 480px) {
          .option { flex: 1 1 100%; }
          .button-group { flex-direction: column; }
          .button { width: 100%; }
        }
      `}</style>

      {page > 0 && (
        <header className="header">
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2933/2933603.png" alt="Optometry Logo" />
          <h1 className="title">Optometry Chat</h1>
        </header>
      )}

      <div className="container">
        {page === 0 && (
          <div className="intro">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2933/2933603.png" alt="Optometry Logo" />
            <h1>Optometry Chat</h1>
            <p>Created by BUABENG GODFRED, a fourth year KNUST student</p>
            <button className="arrow-btn" onClick={handleNext} aria-label="Start">
              &#8594;
            </button>
          </div>
        )}

        {page === 1 && (
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
              <button className="button primary" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {page === 2 && (
          <>
            <h2 className="section-title">History of Presenting Complaint</h2>
            <div className="option-list">
              {['intensity','duration','onset'].map(sec => {
                const opts = sec === 'intensity' ? intensityOptions : sec === 'duration' ? durationOptions : onsetOptions;
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
              <button className="button primary" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {page === 3 && (
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
              <button className="button primary" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {page === 4 && (
          <>
            <h2 className="section-title">Review &amp; Submit</h2>
            <div className="review">
              <p><strong>Chief Complaint:</strong> {chiefComplaint.join(', ')}</p>
              <p><strong>Intensity:</strong> {historyOptions.intensity}</p>
              <p><strong>Duration:</strong> {historyOptions.duration}</p>
              <p><strong>Onset:</strong> {historyOptions.onset}</p>
              <p><strong>Medical History:</strong> {medicalHistory.join(', ')}</p>
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>Previous</button>
              <button className="button primary" onClick={() => alert('Submitted!')}>Submit</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
