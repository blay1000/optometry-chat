import React, { useState } from 'react';

const PrintoutPage = ({ data }) => {
  const {
    name,
    age,
    gender,
    occupation,
    chiefComplaint,
    historyOptions,
    ocularHistory,
    medicalHistory,
    allergies,
    drugHistory,
    socialHistory,
    familyOcularHistory,
    familyMedicalHistory,
    vitals,
    cdRatios,
  } = data;

  // === Styles ===
  const printHeader = {
    display: 'none',
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const logoStyle = {
    width: '48px',
    height: '48px',
    verticalAlign: 'middle',
    marginRight: '0.7rem',
    marginBottom: '0.3rem',
  };

  const printTitle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#000',
    display: 'inline-block',
    verticalAlign: 'middle',
    margin: 0,
  };

  const printMediaStyles = `
    @media print {
      .no-print {
        display: none !important;
      }
      .print-header {
        display: block !important;
      }
      body {
        background-color: #ffffff !important;
      }
    }
  `;

  const pageWrapper = {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '2.5rem 1rem',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    color: '#000',
  };

  const cardContainer = {
    maxWidth: '600px',
    margin: '2rem auto',
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    border: '1px solid #e5e7eb',
    padding: '2.5rem 2rem',
  };

  const sectionWrapper = {
    padding: '1.2rem 0',
    borderBottom: '1px solid #f3f4f6',
  };

  const lastSection = {
    padding: '1.2rem 0',
    borderBottom: 'none',
  };

  const sectionHeading = {
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#22223b',
    marginBottom: '0.5rem',
  };

  const labelText = {
    fontWeight: '600',
    color: '#22223b',
    width: '120px',
    display: 'inline-block',
  };

  const valueText = {
    display: 'inline-block',
    color: '#22223b',
  };

  const paragraphText = {
    margin: '0.3rem 0',
    lineHeight: '1.6',
    fontSize: '1rem',
  };

  const buttonWrapper = {
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const printButton = {
    backgroundColor: '#22223b',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const handlePrint = () => window.print();


  return (
    <>
      <style>{printMediaStyles}</style>

      <div style={pageWrapper}>
        {/* PRINT HEADER: logo and title */}
        <div className="print-header" style={printHeader}>
          <img src="https://cdn-icons-png.flaticon.com/512/709/709614.png" alt="eyeDeal logo" style={logoStyle} />
          <h1 style={printTitle}>eyeDeal</h1>
        </div>

        

        

        {/* Main Content */}
        <div style={cardContainer}>
          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Patient Demographics</h2>
            <p style={paragraphText}><span style={labelText}>Name:</span> <span style={valueText}>{name || 'N/A'}</span></p>
            <p style={paragraphText}><span style={labelText}>Age:</span> <span style={valueText}>{age || 'N/A'}</span></p>
            <p style={paragraphText}><span style={labelText}>Gender:</span> <span style={valueText}>{gender || 'N/A'}</span></p>
            <p style={paragraphText}><span style={labelText}>Occupation:</span> <span style={valueText}>{occupation || 'N/A'}</span></p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Chief Complaint</h2>
            <p style={paragraphText}>{chiefComplaint?.length > 0 ? chiefComplaint.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>History of Presenting Complaint</h2>
            {Object.entries(historyOptions).map(([key, value]) => (
              <p key={key} style={paragraphText}>
                <span style={labelText}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                <span style={valueText}>{value || 'Not provided'}</span>
              </p>
            ))}
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Ocular History</h2>
            <p style={paragraphText}>{ocularHistory?.length > 0 ? ocularHistory.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Medical History</h2>
            <p style={paragraphText}>{medicalHistory?.length > 0 ? medicalHistory.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Allergies</h2>
            <p style={paragraphText}>{allergies?.length > 0 ? allergies.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Drug History</h2>
            <p style={paragraphText}>{drugHistory?.length > 0 ? drugHistory.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Social History</h2>
            <p style={paragraphText}>{socialHistory?.length > 0 ? socialHistory.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Family Ocular History</h2>
            <p style={paragraphText}>{familyOcularHistory?.length > 0 ? familyOcularHistory.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Family Medical History</h2>
            <p style={paragraphText}>{familyMedicalHistory?.length > 0 ? familyMedicalHistory.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 style={sectionHeading}>Vitals</h2>
            <p style={paragraphText}>{vitals || 'Not provided'}</p>
          </div>

          <div style={lastSection}>
            <h2 style={sectionHeading}>CD Ratios</h2>
            <p style={paragraphText}><span style={labelText}>Right Eye:</span> <span style={valueText}>{cdRatios?.right || 'Not provided'}</span></p>
            <p style={paragraphText}><span style={labelText}>Left Eye:</span> <span style={valueText}>{cdRatios?.left || 'Not provided'}</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintoutPage;
