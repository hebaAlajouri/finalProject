import React, { Component } from "react";
import "./blog.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      body: "",
      reminder: "",
      color: "#ffffff",
    };
  }

  componentDidMount() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      this.setState({ notes: JSON.parse(storedNotes) });
    }
  }

  componentDidUpdate() {
    const { notes } = this.state;
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  addNote = () => {
    const { title, body, reminder, color } = this.state;
    const creationDate = new Date().toLocaleString();
    const newNote = {
      title,
      body,
      reminder,
      color,
      creationDate,
    };
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
      title: "",
      body: "",
      reminder: "",
    }));
  };

  removeNote = (index) => {
    const { notes } = this.state;

    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    this.setState({ notes: updatedNotes });
  };

  render() {
    const { notes, title, body, reminder, color } = this.state;

    return (
      <div className="p1">
        <h1 id="h">Blog Application</h1>
        <div>
          <label htmlFor="title-input-id">Title:</label>
          <br />
          <input
            id="title-input-id"
            type="text"
            size="9"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <br />
        </div>
        <div>
          <label>Body:</label>
          <br />
          <textarea
            value={body}
            onChange={(e) => this.setState({ body: e.target.value })}
          />
          <br />
        </div>
        <div>
          <label>Reminder:</label>
          <br />
          <input
            type="datetime-local"
            value={reminder}
            onChange={(e) => this.setState({ reminder: e.target.value })}
          />
          <br />
        </div>
        <div>
          <label>Color:</label>
          <br />
          <input
            type="color"
            value={color}
            onChange={(e) => this.setState({ color: e.target.value })}
          />
        </div>
        <button onClick={this.addNote} type="button" className="b">
          publish!
        </button>

        <div id="notes-container">
          {notes.map((note, index) => (
            <div
              key={`notes${index + 1}`}
              className="note"
              style={{ backgroundColor: note.color }}
            >
              <span
                className="remove-btn"
                onClick={() => this.removeNote(index)}
                onKeyUp={() => {}}
                tabIndex={0}
                role="button"
              >
                Remove
              </span>
              <strong>{note.title}</strong>
              <p>{note.body}</p>
              {note.reminder && <p>Reminder: {note.reminder}</p>}
              <p>Created on: {note.creationDate}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
