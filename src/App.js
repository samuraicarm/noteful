import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import SideBar from './components/SideBar';
import CreateFolder from './components/CreateFolder';
import ErrorBoundary from './components/errorBoundary';
import NoteDetail from './components/NoteDetail';

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
        }).then(() => {
          this.setState({ notes: this.state.notes.filter(note => note.id !== id) })
        });
      },
      addNote: (newNote) => {
        fetch(`http://localhost:9090/notes/`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newNote)
        }).then(res => res.json()).then((returnedNote) => {
          this.setState({ notes: [...this.state.notes, returnedNote] });
        });
      },
      addFolder: (newFolder) => {
        fetch(`http://localhost:9090/folders`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newFolder)
        }).then(res => res.json()).then((returnedFolder) => {
          this.setState({ folder: [...this.state.folders, returnedFolder] });
        });
      },
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

  render() {

    return (
      <Router >
        <Context.Provider value={this.state}>
          <main className='App'>
            <Header />
            <div className="wrapper">
              <ErrorBoundary>
                <div className="box columnA">
                  <SideBar />
                </div>
              </ErrorBoundary>
              <ErrorBoundary>
                <div className="box columnB">
                  <Switch>
                    <Route exact path={["/", "/folders/:folderid", "/notes/:noteid"]} component={Notes} />
                    <Route path="/CreateFolder" component={CreateFolder} />
                    <Route path="/AddNote" component={AddNote} />
                  </Switch>
                </div>
              </ErrorBoundary>
            </div>
          </main>
        </Context.Provider>
      </Router>
    );

  }

}

export default App;
