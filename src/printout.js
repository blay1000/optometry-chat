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
    indirectQuestions,
    anteriorExam,
    posteriorExam,
    diagnosis,
    distanceVA,
    nearVA,
  } = data;

  const logoSrc = "https://cdn-icons-png.flaticon.com/512/709/709614.png";
  const brandName = "eyeDeal";

  /* ---------- PRINT AND RESPONSIVE STYLES ---------- */
  const printMediaStyles = `
    @media print {
      .no-print { display: none !important; }

      .print-header {
        display: block !important;
        page-break-after: avoid !important;
      }

      .card-container > *:not(:first-child) .print-header {
        display: none !important;
      }

      body {
        background-color: #ffffff !important;
        margin: 0;
        padding-bottom: 10rem;
        position: relative;
      }

      body::after {
        content: "© 2025 Buabeng Godfred, Optometry Student, KNUST";
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 0.65rem;
        color: #888;
        padding: 0.001rem 0;
        border-top: 1px solid #ccc;
      }

      @page { margin: 1in; }
    }

    @media (max-width: 600px) {
      .card-container { padding: 1rem !important; }
      .section-heading { font-size: 1rem !important; }
      .label-text { display: block !important; margin-bottom: 0.3rem; }
      .paragraph-text { font-size: 0.9rem !important; }
    }
  `;

  /* ---------- WATERMARK PRINT STYLE (CENTRED) ---------- */
  const printWatermarkStyle = `
    @media print {
      .watermark {
        display: block;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.04 !important;
        width: 300px;
        height: 300px;
        z-index: 0;
        pointer-events: none;
      }
    }
  `;

  /* ---------- INLINE STYLE OBJECTS ---------- */
  const styles = {
    pageWrapper: {
      backgroundColor: '#f7f8fa',
      minHeight: '100vh',
      padding: '2rem 1rem',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      color: '#111',
      position: 'relative',
      zIndex: 1,
    },
    watermark: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0.05,
      zIndex: 0,
      width: '300px',
      height: '300px',
      pointerEvents: 'none',
    },
    cardContainer: {
      maxWidth: '700px',
      margin: '1rem auto',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
      padding: '2rem',
    },
    section: {
      padding: '1.2rem 0',
      borderBottom: '1.2px solid #eee',
      pageBreakInside: 'avoid',
    },
    lastSection: {
      padding: '1rem 0',
      pageBreakInside: 'avoid',
    },
    heading: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#444',
      marginBottom: '0.6rem',
      textAlign: 'center',
    },
    label: {
      fontWeight: '600',
      color: '#333',
      width: '120px',
      display: 'inline-block',
      fontSize: '0.95rem',
    },
    value: {
      display: 'inline-block',
      color: '#111',
      fontSize: '0.95rem',
    },
    paragraph: {
      margin: '0.25rem 0',
      lineHeight: '1.5',
      fontSize: '0.95rem',
    },
    eyeHeading: {
      fontSize: '0.92rem',
      fontWeight: 600,
      color: '#555',
      marginBottom: '0.2rem',
      textAlign: 'center',
    },
    footer: {
      marginTop: '2rem',
      textAlign: 'center',
      fontSize: '0.68rem',
      color: '#888',
      borderTop: '1px solid #eee',
      paddingTop: '1rem',
    },
    logo: {
      width: '60px',
      height: '60px',
      verticalAlign: 'middle',
      marginRight: '0.6rem',
      marginBottom: '0.2rem',
    },
    header: {
      display: 'block',
      textAlign: 'center',
      marginBottom: '1.5rem',
      pageBreakAfter: 'avoid',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#000',
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: 0,
    },
  };

  /* ---------- UTILITY FUNCTIONS ---------- */
  const renderList = (val) =>
    Array.isArray(val) ? (val.length > 0 ? val.join(', ') : 'None') : val || 'None';

  const renderEyeFindings = (data, eyePrefix) => {
    if (!Array.isArray(data) || data.length === 0)
      return <p style={styles.paragraph}>No findings</p>;

    const findings = data
      .filter((item) => item.startsWith(eyePrefix))
      .reduce((acc, item) => {
        const [label, ...rest] = item.replace(`${eyePrefix} `, '').split(':');
        const value = rest.join(':').trim();
        if (!label) return acc;
        if (!acc[label.trim()]) acc[label.trim()] = [];
        if (value && !acc[label.trim()].includes(value)) acc[label.trim()].push(value);
        return acc;
      }, {});

    return (
      <div style={{ margin: '0.5rem 0 1rem 1.2em' }}>
        {Object.entries(findings).map(([label, values], idx) => (
          <p
            key={idx}
            style={{ fontSize: '0.95rem', marginBottom: '0.7em', lineHeight: 1.7 }}
          >
            <span style={{ fontWeight: 600 }}>{label}:</span> {values.join(', ')}
          </p>
        ))}
      </div>
    );
  };

  /* ---------- JSX ---------- */
  return (
    <>
      <style>{printMediaStyles + printWatermarkStyle}</style>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <div style={styles.pageWrapper}>
        <img src={logoSrc} alt="Watermark" className="watermark" style={styles.watermark} />

        <div className="print-header" style={styles.header}>
          <img src={logoSrc} alt={`${brandName} logo`} style={styles.logo} />
          <h1 style={styles.title}>{brandName}</h1>
        </div>

        <div className="card-container" style={styles.cardContainer}>

          {/* ---------- PATIENT DEMOGRAPHICS ---------- */}
          <div style={styles.section}>
            <h2 style={styles.heading}>Patient Demographics</h2>
            <p style={styles.paragraph}><span style={styles.label}>Name:</span> <span style={styles.value}>{name || 'N/A'}</span></p>
            <p style={styles.paragraph}><span style={styles.label}>Age:</span> <span style={styles.value}>{age || 'N/A'}</span></p>
            <p style={styles.paragraph}><span style={styles.label}>Gender:</span> <span style={styles.value}>{gender || 'N/A'}</span></p>
            <p style={styles.paragraph}><span style={styles.label}>Occupation:</span> <span style={styles.value}>{occupation || 'N/A'}</span></p>
          </div>

          {/* ---------- VISUAL ACUITY ---------- */}
          {distanceVA && nearVA && (
            <div style={styles.section}>
              <h2 style={styles.heading}>Visual Acuity</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5em', marginBottom: '1.0em' }}>
                <div style={{ minWidth: 160 }}>
                  <span style={styles.label}>Distance VA (RE):</span>
                  <span style={styles.value}>{distanceVA.right || 'N/A'}</span>
                </div>
                <div style={{ minWidth: 160 }}>
                  <span style={styles.label}>Distance VA (LE):</span>
                  <span style={styles.value}>{distanceVA.left || 'N/A'}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5em' }}>
                <div style={{ minWidth: 160 }}>
                  <span style={styles.label}>Near VA (RE):</span>
                  <span style={styles.value}>{nearVA.right || 'N/A'}</span>
                </div>
                <div style={{ minWidth: 160 }}>
                  <span style={styles.label}>Near VA (LE):</span>
                  <span style={styles.value}>{nearVA.left || 'N/A'}</span>
                </div>
              </div>
            </div>
          )}

          {/* ---------- OTHER SECTIONS ---------- */}
          {[
            ['Chief Complaint', chiefComplaint],
            ['History of Presenting Complaint', Object.entries(historyOptions).map(([k, v]) => `${k}: ${v}`)],
            ['Ocular History', ocularHistory],
            ['Medical History', medicalHistory],
            ['Allergies', allergies],
            ['Drug History', drugHistory],
            ['Social History', socialHistory],
            ['Family Ocular History', familyOcularHistory],
            ['Family Medical History', familyMedicalHistory],
            ['Vitals', vitals],
            ['Indirect Questions', indirectQuestions],
          ].map(([title, val], idx) => (
            <div style={styles.section} key={idx}>
              <h2 style={styles.heading}>{title}</h2>
              {Array.isArray(val)
                ? val.map((v, i) => <p key={i} style={styles.paragraph}>{v}</p>)
                : <p style={styles.paragraph}>{renderList(val)}</p>}
            </div>
          ))}

          {/* ---------- EXAMINATIONS ---------- */}
          <div style={styles.section}>
            <h2 style={styles.heading}>Anterior Segment Examination</h2>
            <h3 style={styles.eyeHeading}>Right Eye</h3>
            {renderEyeFindings(anteriorExam, 'RE')}
            <h3 style={styles.eyeHeading}>Left Eye</h3>
            {renderEyeFindings(anteriorExam, 'LE')}
          </div>

          <div style={styles.section}>
            <h2 style={styles.heading}>Posterior Segment Examination</h2>
            <h3 style={styles.eyeHeading}>Right Eye</h3>
            {renderEyeFindings(posteriorExam, 'RE')}
            <h3 style={styles.eyeHeading}>Left Eye</h3>
            {renderEyeFindings(posteriorExam, 'LE')}
          </div>

          {/* ---------- CD RATIOS ---------- */}
          <div style={styles.section}>
            <h2 style={styles.heading}>CD Ratios</h2>
            <p style={styles.paragraph}><span style={styles.label}>Right Eye:</span> <span style={styles.value}>{cdRatios?.right || 'Not provided'}</span></p>
            <p style={styles.paragraph}><span style={styles.label}>Left Eye:</span> <span style={styles.value}>{cdRatios?.left || 'Not provided'}</span></p>
          </div>

          {/* ---------- DIAGNOSIS ---------- */}
          <div style={styles.lastSection}>
            <h2 style={styles.heading}>Diagnosis</h2>
            <p style={styles.paragraph}>{renderList(diagnosis)}</p>
          </div>

          {/* ---------- FOOTER ---------- */}
          <footer style={styles.footer}>
            © 2025 Buabeng Godfred, Optometry Student, KNUST
          </footer>
        </div>
      </div>
    </>
  );
};

export default PrintoutPage;
