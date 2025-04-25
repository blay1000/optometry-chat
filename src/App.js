import React, { useState } from 'react';

const Chatflow = () => {
  const [page, setPage] = useState(1);
  const [chiefComplaint, setChiefComplaint] = useState([]);

  const symptoms = [
    'Pain', 'Redness', 'Tearing', 'Gritty Sensation', 'Discharge', 'Blurry Vision'
  ];

  const handleNext = () => {
    setPage(prev => prev + 1);
  };

  const handlePrevious = () => {
    setPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setChiefComplaint(prevState => 
      checked ? [...prevState, value] : prevState.filter(item => item !== value)
    );
  };

  return (
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
    </div>
  );
};

export default Chatflow;
