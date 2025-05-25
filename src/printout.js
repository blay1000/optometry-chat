import React from 'react';

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

  // Constants
  const logoSrc = "https://cdn-icons-png.flaticon.com/512/709/709614.png";
  const brandName = "eyeDeal";

  // Styles
  const printHeader = {
    display: 'none',
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const logoStyle = {
    width: '42px',
    height: '42px',
    verticalAlign: 'middle',
    marginRight: '0.6rem',
    marginBottom: '0.2rem',
  };

  const printTitle = {
    fontSize: '1.5rem',
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

    @media (max-width: 600px) {
      .card-container {
        padding: 1rem 1rem !important;
      }

      .section-heading {
        font-size: 1rem !important;
      }

      .label-text {
        display: block !important;
        margin-bottom: 0.3rem;
      }

      .paragraph-text {
        font-size: 0.9rem !important;
      }
    }
  `;

  const pageWrapper = {
    backgroundColor: '#f7f8fa',
    minHeight: '100vh',
    padding: '2rem 1rem',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    color: '#111',
  };

  const cardContainer = {
    maxWidth: '700px',
    margin: '1rem auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
    padding: '2rem 2rem',
  };

  const sectionWrapper = {
    padding: '1rem 0',
    borderBottom: '1px solid #eee',
  };

  const lastSection = {
    padding: '1rem 0',
    borderBottom: 'none',
  };

  const sectionHeading = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#444',
    marginBottom: '0.6rem',
  };

  const labelText = {
    fontWeight: '600',
    color: '#333',
    width: '120px',
    display: 'inline-block',
    fontSize: '0.95rem',
  };

  const valueText = {
    display: 'inline-block',
    color: '#111',
    fontSize: '0.95rem',
  };

  const paragraphText = {
    margin: '0.25rem 0',
    lineHeight: '1.5',
    fontSize: '0.95rem',
  };

  return (
    <>
      <style>{printMediaStyles}</style>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <div style={pageWrapper}>
        <div className="print-header" style={printHeader}>
          <img src={logoSrc} alt={`${brandName} logo`} style={logoStyle} />
          <h1 style={printTitle}>{brandName}</h1>
        </div>

        <div className="card-container" style={cardContainer}>
          <div style={sectionWrapper}>
            <h2 className="section-heading" style={sectionHeading}>Patient Demographics</h2>
            <p className="paragraph-text" style={paragraphText}><span className="label-text" style={labelText}>Name:</span> <span style={valueText}>{name || 'N/A'}</span></p>
            <p className="paragraph-text" style={paragraphText}><span className="label-text" style={labelText}>Age:</span> <span style={valueText}>{age || 'N/A'}</span></p>
            <p className="paragraph-text" style={paragraphText}><span className="label-text" style={labelText}>Gender:</span> <span style={valueText}>{gender || 'N/A'}</span></p>
            <p className="paragraph-text" style={paragraphText}><span className="label-text" style={labelText}>Occupation:</span> <span style={valueText}>{occupation || 'N/A'}</span></p>
          </div>

          <div style={sectionWrapper}>
            <h2 className="section-heading" style={sectionHeading}>Chief Complaint</h2>
            <p className="paragraph-text" style={paragraphText}>{chiefComplaint?.length > 0 ? chiefComplaint.join(', ') : 'None'}</p>
          </div>

          <div style={sectionWrapper}>
            <h2 className="section-heading" style={sectionHeading}>History of Presenting Complaint</h2>
            {Object.entries(historyOptions).map(([key, value]) => (
              <p key={key} className="paragraph-text" style={paragraphText}>
                <span className="label-text" style={labelText}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
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
