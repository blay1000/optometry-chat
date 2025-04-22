// Optometry Diagnostic Chat App UI (React)
import React, { useState } from "react";

const diagnosticFlow = [
  {
    id: 1,
    question: "Welcome! What is your main eye complaint?",
    options: ["Blurry Vision", "Eye Pain", "Redness", "Dryness","itchiness"]
  },
  {
    id: 2,
    dependsOn: "Blurry Vision",
    question: "Is the blurry vision constant or does it come and go?",
    options: ["Constant", "Intermittent"]
  },
  {
    id: 3,
    dependsOn: "Constant",
    question: "Do you wear glasses or contact lenses?",
    options: ["Glasses", "Contact Lenses", "Neither"]
  },
  {
    id: 99,
    result: true,
    dependsOn: "Glasses",
    message: "You may need a prescription update. Visit your optometrist for refraction testing."
  },
  {
    id: 99,
    result: true,
    dependsOn: "Contact Lenses",
    message: "Blurry vision with contact lenses may indicate dryness or poor fit. Consider a lens check."
  },
  {
    id: 99,
    result: true,
    dependsOn: "Neither",
    message: "You might be experiencing refractive error. An eye exam is recommended."
  }
];

function App() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: diagnosticFlow[0].question,
      options: diagnosticFlow[0].options
    }
  ]);

  const handleUserResponse = (text) => {
    const newMessages = [...messages, { from: "user", text }];

    const nextStep = diagnosticFlow.find(
      (item) => item.dependsOn === text && !item.result
    );

    const diagnosis = diagnosticFlow.find(
      (item) => item.dependsOn === text && item.result
    );

    if (nextStep) {
      newMessages.push({
        from: "bot",
        text: nextStep.question,
        options: nextStep.options
      });
    } else if (diagnosis) {
      newMessages.push({ from: "bot", text: diagnosis.message });
    } else {
      newMessages.push({ from: "bot", text: "Sorry, I couldn't find a next step." });
    }

    setMessages(newMessages);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          height: "80vh",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "1rem"
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
              marginBottom: "1rem"
            }}
          >
            <div
              style={{
                backgroundColor: msg.from === "user" ? "#007bff" : "#e0e0e0",
                color: msg.from === "user" ? "#fff" : "#000",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                maxWidth: "70%"
              }}
            >
              {msg.text}
              {msg.options && (
                <div style={{ marginTop: "0.5rem" }}>
                  {msg.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleUserResponse(option)}
                      style={{
                        marginRight: "0.5rem",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "10px",
                        border: "1px solid #007bff",
                        background: "#fff",
                        cursor: "pointer"
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
