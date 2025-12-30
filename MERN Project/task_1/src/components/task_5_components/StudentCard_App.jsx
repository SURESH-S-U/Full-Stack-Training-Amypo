import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentCard_App() {
  const [name, setName] = useState("");
  const [regno, setRegno] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // stops page refresh
    setSubmitted(true);
  }

  return (
    <div style={{ padding: "20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Register Number"
          value={regno}
          onChange={(e) => setRegno(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <StudentCard
          name={name}
          regno={regno}
          cgpa={cgpa}
        />
      )}
    </div>
  );
}

export default StudentCard_App;
