function StudentCard(props) {
  return (
    <div style={{ border: "2px solid black", padding: "15px", marginTop: "20px" }}>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Register No:</b> {props.regno}</p>
      <p><b>CGPA:</b> {props.cgpa}</p>

      <h3>
        {props.cgpa >= 8 ? "Excellent" : "Needs Improvement"}
      </h3>
    </div>
  );
}

export default StudentCard;
