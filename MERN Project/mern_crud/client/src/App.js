import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function App() {
  const [people, setPeople] = useState([]);
  const [form, setForm] = useState({ name: "", age: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    const res = await axios.get(API);
    setPeople(res.data);
  };

  // POST
  const addPerson = async () => {
    await axios.post(API, form);
    setForm({ name: "", age: "" });
    loadPeople();
  };

  // Start Edit
  const startEdit = (p) => {
    setEditId(p._id);
    setForm({ name: p.name, age: p.age });
  };

  // PUT
  const updatePerson = async () => {
    const res = await axios.put(`${API}/${editId}`, form);

    setPeople(
      people.map(p => p._id === editId ? res.data : p)
    );

    setEditId(null);
    setForm({ name: "", age: "" });
  };

  return (
    <div>
      <h3>MERN Stack CRUD - Application</h3>

      <input
        type="text"
        placeholder="Enter Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Enter Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      {editId ? (
        <button onClick={updatePerson}>Update</button>
      ) : (
        <button onClick={addPerson}>Add</button>
      )}

      <hr />

      {people.map((p) => (
        <div key={p._id}>
          <b>{p.name}</b> - {p.age}
          <button onClick={() => startEdit(p)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;