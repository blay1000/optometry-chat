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

  const symptoms = [
    'Pain', 'Redness', 'Tearing', 'Gritty Sensation', 'Discharge', 'Blurry Vision'
  ];

  const handleNext = () => setPage(prev => prev + 1);
  const handlePrevious = () => setPage(prev => (prev > 1 ? prev - 1 : prev));

  const handleCheckboxChange = ({ target }) => {
    const { value, checked } = target;
    setChiefComplaint(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value)
    );
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
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              Chief Complaint
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              {symptoms.map(symptom => (
                <label key={symptom} style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    value={symptom}
                    checked={chiefComplaint.includes(symptom)}
                    onChange={handleCheckboxChange}
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
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              History of Presenting Complaint
            </h2>
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
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              Medical History
            </h2>
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
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              Review and Conclusion
            </h2>
            <button
              onClick={handlePrevious}
              style={{ marginRight: '1rem', padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Previous
            </button>
            <button
              style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Finish
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatflow;
