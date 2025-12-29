import React, { useState } from "react";
import News from "./components/News";


function App() {

  // Default category
  const [category, setCategory] = useState("general");

  return (
    <div style={{padding:"20px"}}>

      <h2>Top News</h2>

      {/* Category Buttons */}
      <div style={{marginBottom:"15px"}}>
        <button onClick={() => setCategory("general")}>General</button>
        <button onClick={() => setCategory("sports")}>Sports</button>
        <button onClick={() => setCategory("politics")}>Political</button>
      </div>

      {/* Pass category to News Component */}
      <News category={category} />
    </div>
  );
}

export default App;
