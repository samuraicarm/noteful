import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import SideBar from "./components/SideBar";
import CreateFolder from "./components/CreateFolder";
import ErrorBoundary from "./components/errorBoundary";
import NoteItem from "./components/NoteItem";

import { API_ENDPOINT, API_KEY } from "./feconfig";

import "./App.css";

import Context from "./Context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
      delNote: (id) => {
        fetch(`${API_ENDPOINT}/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }).then(() => {
          this.setState({
            notes: this.state.notes.filter((note) => note.id !== id),
          });
        });
      },
      addNote: (newNote) => {
        fetch(`${API_ENDPOINT}/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify(newNote),
        })
          .then((res) => res.json())
          .then((returnedNote) => {
            this.setState({ notes: [...this.state.notes, returnedNote] });
          });
      },
      addFolder: (newFolder) => {
        fetch(`${API_ENDPOINT}/folders`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify(newFolder),
        })
          .then((res) => res.json())
          .then((returnedFolder) => {
            this.setState({ folders: [...this.state.folders, returnedFolder] });
          });
      },
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`${API_ENDPOINT}/`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }),
      fetch(`${API_ENDPOINT}/folders`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  render() {
    return (
      <ErrorBoundary>
        <Context.Provider value={this.state}>
          <main className="App">
            <Header />
            <div className="wrapper">
              <div className="box columnA">
                <SideBar />
              </div>
              <div className="box columnB">
                <Route
                  exact
                  path={["/", "/folders/:folderid"]}
                  component={Notes}
                />
                <Route path="/notes/:noteid" component={NoteItem} />
                <Route path="/CreateFolder" component={CreateFolder} />
                <Route path="/AddNote" component={AddNote} />
              </div>
            </div>
          </main>
        </Context.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
