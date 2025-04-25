import React, { useState } from 'react';

// Combined Header and Chatflow in one file
const Header = () => {
  return (
    <header style={{
      backgroundColor: '#121212',
      color: '#ffffff',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 10px rgba(0,0,0,0.6)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1087/1087922.png" 
          alt="Optometry Logo"
          style={{ 
            width: '40px', 
            height: '40px', 
            marginRight: '1rem',
            filter: 'invert(1)' // Make logo white
          }}
        />
        <h1 style={{ fontSize: '1.5rem', color: '#ffffff' }}>Optometry ChartFlow</h1>
      </div>
    </header>
  );
};

const Chatflow = () => {
  const [page, setPage] = useState(1);
  const [chiefComplaint, setChiefComplaint] = useState([]);
  const [historyOptions, setHistoryOptions] = useState({
    intensity: '',
    duration: '',
    onset: ''
  });
  const [medicalHistory, setMedicalHistory] = useState([]);

  const symptoms = [
    'Pain', 'Redness', 'Tearing', 'Gritty Sensation', 'Discharge', 'Blurry Vision'
  ];

  const intensityOptions = ['Mild', 'Moderate', 'Severe'];
  const durationOptions = ['Less than 24 hours', '1-3 days', 'More than 3 days'];
  const onsetOptions = ['Sudden', 'Gradual', 'Intermittent'];

  const medicalConditions = [
    'Diabetes', 'Hypertension', 'Sickle Cell Anemia', 'Asthma', 'Glaucoma'
  ];

  const handleNext = () => setPage(prev => prev + 1);
  const handlePrevious = () => setPage(prev => (prev > 1 ? prev - 1 : prev));

  const handleCheckboxChange = ({ target }, section) => {
    const { value, checked } = target;
    if (section === 'chiefComplaint') {
      setChiefComplaint(prev =>
        checked ? [...prev, value] : prev.filter(item => item !== value)
      );
    } else if (section === 'medicalHistory') {
      setMedicalHistory(prev =>
        checked ? [...prev, value] : prev.filter(item => item !== value)
      );
    } else {
      setHistoryOptions(prev => ({
        ...prev,
        [section]: checked ? value : ''
      }));
    }
  };

  return (
    <>
      <Header />
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#1e1e1e',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {page === 1 && (
          <div style={{
            width: '100%',
            maxWidth: '600px',
            padding: '1.5rem',
            backgroundColor: '#2c2c2c',
            borderRadius: '8px',
            border: '2px solid #3f51b5',
            marginBottom: '1.5rem',
            boxSizing: 'border-box'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              Chief Complaint
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              {symptoms.map(symptom => (
                <label key={symptom} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 1rem',
                  border: '2px solid #3f51b5',
                  borderRadius: '8px',
                  backgroundColor: '#3a3a3a',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  width: 'calc(50% - 1rem)', // Adjust for mobile view
                  boxSizing: 'border-box'
                }}>
                  <input
                    type="checkbox"
                    value={symptom}
                    checked={chiefComplaint.includes(symptom)}
                    onChange={(e) => handleCheckboxChange(e, 'chiefComplaint')}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {symptom}
                </label>
              ))}
            </div>
            <button
              onClick={handleNext}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                backgroundColor: '#3f51b5',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Next
            </button>
          </div>
        )}

        {page === 2 && (
          <div style={{
            width: '100%',
            maxWidth: '600px',
            padding: '1.5rem',
            backgroundColor: '#2c2c2c',
            borderRadius: '8px',
            border: '2px solid #3f51b5',
            marginBottom: '1.5rem',
            boxSizing: 'border-box'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              History of Presenting Complaint
            </h2>
            {['intensity', 'duration', 'onset'].map((section, index) => (
              <div key={index}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  {section === 'intensity' && intensityOptions.map(option => (
                    <label key={option} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.5rem 1rem',
                      border: '2px solid #3f51b5',
                      borderRadius: '8px',
                      backgroundColor: '#3a3a3a',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                      width: 'calc(50% - 1rem)', 
                      boxSizing: 'border-box'
                    }}>
                      <input
                        type="radio"
                        value={option}
                        checked={historyOptions.intensity === option}
                        onChange={(e) => handleCheckboxChange(e, 'intensity')}
                        style={{ marginRight: '0.5rem' }}
                      />
                      {option}
                    </label>
                  ))}
                  {section === 'duration' && durationOptions.map(option => (
                    <label key={option} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.5rem 1rem',
                      border: '2px solid #3f51b5',
                      borderRadius: '8px',
                      backgroundColor: '#3a3a3a',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                      width: 'calc(50% - 1rem)', 
                      boxSizing: 'border-box'
                    }}>
                      <input
                        type="radio"
                        value={option}
                        checked={historyOptions.duration === option}
                        onChange={(e) => handleCheckboxChange(e, 'duration')}
                        style={{ marginRight: '0.5rem' }}
                      />
                      {option}
                    </label>
                  ))}
                  {section === 'onset' && onsetOptions.map(option => (
                    <label key={option} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.5rem 1rem',
                      border: '2px solid #3f51b5',
                      borderRadius: '8px',
                      backgroundColor: '#3a3a3a',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                      width: 'calc(50% - 1rem)', 
                      boxSizing: 'border-box'
                    }}>
                      <input
                        type="radio"
                        value={option}
                        checked={historyOptions.onset === option}
                        onChange={(e) => handleCheckboxChange(e, 'onset')}
                        style={{ marginRight: '0.5rem' }}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handlePrevious}
              style={{ marginRight: '1rem', padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Next
            </button>
          </div>
        )}

        {page === 3 && (
          <div style={{
            width: '100%',
            maxWidth: '600px',
            padding: '1.5rem',
            backgroundColor: '#2c2c2c',
            borderRadius: '8px',
            border: '2px solid #3f51b5',
            marginBottom: '1.5rem',
            boxSizing: 'border-box'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              Patient Medical History
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              {medicalConditions.map(condition => (
                <label key={condition} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 1rem',
                  border: '2px solid #3f51b5',
                  borderRadius: '8px',
                  backgroundColor: '#3a3a3a',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  width: 'calc(50% - 1rem)', // Adjust width for mobile view
                  boxSizing: 'border-box'
                }}>
                  <input
                    type="checkbox"
                    value={condition}
                    checked={medicalHistory.includes(condition)}
                    onChange={(e) => handleCheckboxChange(e, 'medicalHistory')}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {condition}
                </label>
              ))}
            </div>
            <button
              onClick={handlePrevious}
              style={{ marginRight: '1rem', padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Next
            </button>
          </div>
        )}

        {page === 4 && (
          <div style={{
            width: '100%',
            maxWidth: '600px',
            padding: '1.5rem',
            backgroundColor: '#2c2c2c',
            borderRadius: '8px',
            border: '2px solid #3f51b5',
            marginBottom: '1.5rem',
            boxSizing: 'border-box'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              Review and Submit
            </h2>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#2c2c2c',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '600px',
              border: '2px solid #3f51b5',
              marginBottom: '1.5rem'
            }}>
              <p><strong>Chief Complaint:</strong> {chiefComplaint.join(', ')}</p>
              <p><strong>Intensity:</strong> {historyOptions.intensity}</p>
              <p><strong>Duration:</strong> {historyOptions.duration}</p>
              <p><strong>Onset:</strong> {historyOptions.onset}</p>
              <p><strong>Medical History:</strong> {medicalHistory.join(', ')}</p>
            </div>
            <button
              onClick={handlePrevious}
              style={{ marginRight: '1rem', padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Previous
            </button>
            <button
              onClick={() => alert("Form Submitted!")}
              style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatflow;
