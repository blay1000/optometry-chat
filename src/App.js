import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global reset and base styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #f5f5f5;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }
`;

// Styled Components
const Header = styled.header`
  background: #000000;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 0.75rem;
  filter: invert(1);
`;

const Title = styled.h1`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  color: #000000;
  font-size: 2rem;
  text-align: center;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 2px solid #000000;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
  transition: background 0.2s;

  input {
    margin-right: 0.5rem;
    accent-color: #000000;
  }
  &:hover {
    background: #e0e0e0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  color: #ffffff;
  background: ${props => props.primary ? '#000000' : '#666666'};
  transition: background 0.2s;
  &:hover {
    background: ${props => props.primary ? '#333333' : '#444444'};
  }
`;

const ReviewItem = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export default function Chatflow() {
  const [page, setPage] = useState(1);
  const [chiefComplaint, setChiefComplaint] = useState([]);
  const [historyOptions, setHistoryOptions] = useState({ intensity: '', duration: '', onset: '' });
  const [medicalHistory, setMedicalHistory] = useState([]);

  const symptoms = ['Pain', 'Redness', 'Tearing', 'Gritty Sensation', 'Discharge', 'Blurry Vision'];
  const intensityOptions = ['Mild', 'Moderate', 'Severe'];
  const durationOptions = ['Less than 24h', '1-3 days', 'More than 3 days'];
  const onsetOptions = ['Sudden', 'Gradual', 'Intermittent'];
  const medicalConditions = ['Diabetes', 'Hypertension', 'Sickle Cell Anemia', 'Asthma', 'Glaucoma'];

  const handleNext = () => setPage(p => p + 1);
  const handlePrevious = () => setPage(p => Math.max(1, p - 1));

  const handleChange = (e, section) => {
    const { value, checked, name, type } = e.target;
    if (section === 'chief') {
      setChiefComplaint(prev => checked ? [...prev, value] : prev.filter(x => x !== value));
    } else if (section === 'history') {
      setMedicalHistory(prev => checked ? [...prev, value] : prev.filter(x => x !== value));
    } else {
      setHistoryOptions(prev => ({ ...prev, [section]: value }));
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo src="https://cdn-icons-png.flaticon.com/512/2933/2933603.png" alt="Optometry Logo" />
        <Title>Optometry Chat</Title>
      </Header>
      <Container>
        {page === 1 && (
          <Card>
            <SectionTitle>Chief Complaint</SectionTitle>
            <OptionsGrid>
              {symptoms.map(s => (
                <OptionLabel key={s}>
                  <input
                    type="checkbox"
                    value={s}
                    checked={chiefComplaint.includes(s)}
                    onChange={e => handleChange(e, 'chief')}
                  />
                  {s}
                </OptionLabel>
              ))}
            </OptionsGrid>
            <Button primary onClick={handleNext}>Next</Button>
          </Card>
        )}

        {page === 2 && (
          <Card>
            <SectionTitle>History of Presenting Complaint</SectionTitle>
            {['intensity', 'duration', 'onset'].map(sec => (
              <div key={sec}>
                <h3 style={{ color: '#000000', fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </h3>
                <OptionsGrid>
                  {(sec === 'intensity'
                    ? intensityOptions
                    : sec === 'duration'
                    ? durationOptions
                    : onsetOptions
                  ).map(o => (
                    <OptionLabel key={o}>
                      <input
                        type="radio"
                        name={sec}
                        value={o}
                        checked={historyOptions[sec] === o}
                        onChange={e => handleChange(e, sec)}
                      />
                      {o}
                    </OptionLabel>
                  ))}
                </OptionsGrid>
              </div>
            ))}
            <ButtonGroup>
              <Button onClick={handlePrevious}>Previous</Button>
              <Button primary onClick={handleNext}>Next</Button>
            </ButtonGroup>
          </Card>
        )}

        {page === 3 && (
          <Card>
            <SectionTitle>Patient Medical History</SectionTitle>
            <OptionsGrid>
              {medicalConditions.map(m => (
                <OptionLabel key={m}>
                  <input
                    type="checkbox"
                    value={m}
                    checked={medicalHistory.includes(m)}
                    onChange={e => handleChange(e, 'history')}
                  />
                  {m}
                </OptionLabel>
              ))}
            </OptionsGrid>
            <ButtonGroup>
              <Button onClick={handlePrevious}>Previous</Button>
              <Button primary onClick={handleNext}>Next</Button>
            </ButtonGroup>
          </Card>
        )}

        {page === 4 && (
          <Card>
            <SectionTitle>Review & Submit</SectionTitle>
            <ReviewItem>
              <strong>Chief Complaint:</strong> {chiefComplaint.join(', ')}
            </ReviewItem>
            <ReviewItem>
              <strong>Intensity:</strong> {historyOptions.intensity}
            </ReviewItem>
            <ReviewItem>
              <strong>Duration:</strong> {historyOptions.duration}
            </ReviewItem>
            <ReviewItem>
              <strong>Onset:</strong> {historyOptions.onset}
            </ReviewItem>
            <ReviewItem>
              <strong>Medical History:</strong> {medicalHistory.join(', ')}
            </ReviewItem>
            <ButtonGroup>
              <Button onClick={handlePrevious}>Previous</Button>
              <Button primary onClick={() => alert('Form Submitted!')}>Submit</Button>
            </ButtonGroup>
          </Card>
        )}
      </Container>
    </>
  );
}
