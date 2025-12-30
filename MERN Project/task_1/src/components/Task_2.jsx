import React, { useState } from "react";

function Task_2() {
  const [count, setCount] = useState(0);

  const pageStyle = {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#5bd7c9ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const cardStyle = {
    backgroundColor: "#eef5f3ff",
    width: "320px",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    textAlign: "center"
  };

  const countStyle = {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "18px"
  };

  const buttonBase = {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.2s"
  };

  const btnDanger = {
    ...buttonBase,
    backgroundColor: "#ef4444",
    color: "#fff"
  };

  const btnWarning = {
    ...buttonBase,
    backgroundColor: "#facc15",
    color: "#000"
  };

  const btnSuccess = {
    ...buttonBase,
    backgroundColor: "#22c55e",
    color: "#000"
  };

  const buttonGroup = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
    marginTop: "8px",
    flexWrap: "wrap"
  };

  return (
    <>
      <div style={pageStyle}>
        <div style={cardStyle}>
          <h4 style={{ marginBottom: "10px" }}>Counter Application</h4>

          <div style={countStyle}>{count}</div>

          <div style={buttonGroup}>
            <button style={btnDanger} onClick={() => setCount(count - 1)}>
              Decrement
            </button>

            <button style={btnWarning} onClick={() => setCount(0)}>
              Reset
            </button>

            <button style={btnSuccess} onClick={() => setCount(count + 1)}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task_2;
