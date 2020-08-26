import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from './components/Header';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import SideBar from './components/SideBar';
import CreateFolder from './components/CreateFolder';
import NoteItem from './components/NoteItem';
import './App.css';

import Context from './Context';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
      delNote: (id) => {
        fetch(`http://localhost:9090/notes/${id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
        this.setState({ todos: [...this.state.notes.filter(note => note.id !== id)] })
      },
      addNote: (id, title, note) => {
        const newNote = {
          id: id,
          title: title,
          note: note,
        }

        this.setState({ notes: [...this.state.notes, newNote] });
      }
    };
  }

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/notes'),
      fetch('http://localhost:9090/folders'),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  renderRoutes() {
    return (
      <Router>
        <Route exact path="/" render={rprops => (
          <Notes {...rprops} notes={this.state.notes} delNote={this.delNote} />
        )}
        />
        <Route path="/folder/:folderid" render={rprops => (
          <Notes {...rprops}
            notes={this.state.notes.filter(note =>
              note.folderId === rprops.match.params.folderid)}
            delNote={this.delNote} />
        )}
        />
        <Route path="/CreateFolder" component={CreateFolder} />
        <Route path="/AddNote" component={AddNote} />
        <Route path="/note/:noteid"
          render={rprops =>
            <NoteItem delNote={this.delNote}
              note={this.state.notes.find(note => note.id === rprops.match.params.noteid) || { id: '', name: '', content: '', modified: '' }}
              {...rprops} />}
        />
      </Router >
    )
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <main className='App'>
          <Header />
          <div className="wrapper">
            <div className="box columnA">
              <SideBar />
            </div>
            <div className="box columnB"> {this.renderRoutes()}
            </div>
          </div>
        </main>
      </Context.Provider>
    );
  }
}

export default App;
