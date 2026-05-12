import { useEffect, useState } from "react";

const Home = () => {
  const [editId, setEditId] = useState(null);
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleEdit = (note) => {
    setTitle(note.title);
    setText(note.text);
    setEditId(note._id);
  };

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const handleAdd = () => {
    if (!text || !title) return;

    const url = editId
      ? `http://localhost:5000/notes/${editId}`
      : "http://localhost:5000/notes";

    const method = editId ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text })
    })
      .then(res => res.json())
      .then(data => {
        if (editId) {
          setNotes(notes.map(n => (n._id === editId ? data : n)));
          setEditId(null);
        } else {
          setNotes([...notes, data]);
        }

        setTitle("");
        setText("");
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE"
    }).then(() => {
      setNotes(notes.filter(note => note._id !== id));
    });
  };

  return (
    <div className="app-layout">

     
      <div className="note-input">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Take a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={handleAdd}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

   
      <div className="notes-grid">
        {notes.map(note => (
          <div className="note-card" key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.text}</p>

            <div className="actions">
              <button onClick={() => handleEdit(note)}>✏️</button>
              <button onClick={() => handleDelete(note._id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;