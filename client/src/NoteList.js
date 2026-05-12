const NoteList = ({ notes, handleDelete, handleEdit }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <div className="card" key={note._id}>
          <h3 className="note-title">{note.title}</h3>
          <p className="note-text">{note.text}</p>

          <div className="actions">
            <button
              className="edit"
              onClick={() => handleEdit(note)}
            >
              Edit
            </button>

            <button
              className="delete"
              onClick={() => handleDelete(note._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;