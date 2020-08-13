import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import SideBar from './components/SideBar';
import CreateFolder from './components/CreateFolder';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';



class App extends Component {
  state = {
    notes: [
      {
        id: uuidv4(),
        title: 'React',
        note: 'notes on React',
        folder: '',
        modified: "2020-08-10"

      },

      {
        id: uuidv4(),
        title: 'Javascript',
        note: 'notes on javascript',
        folder: '',
        modified: "2020-08-8"
      },

      {
        id: uuidv4(),
        title: 'CSS',
        note: 'notes on css',
        folder: '',
        modified: "2020-07-31"
      },

    ]
  }

  //Delete Note
  delNote = (id) => {
    this.setState({ todos: [...this.state.notes.filter(note => note.id !== id)] })
  }

  //Add Note
  addNote = (title, note) => {
    const newNote = {
      id: uuidv4(),
      title: title,
      note: note,
    }

    this.setState({ notes: [...this.state.notes, newNote] });
  }
  render() {
    return (
      <Router>
        <main className='App'>
          <Switch>
            <div className="container">
              <Header />
              <div className="row">
                <div className="wrapper">
                  <div className="box columnA">
                    <SideBar />
                  </div>
                  <div className="box columnB">
                    <Route exact path="/" render={props => (
                      <React.Fragment>
                        <Notes notes={this.state.notes} delNote={this.delNote} />
                        <div className="noteCreate">
                          <Link to="AddNote"> Create Note</Link>
                        </div>
                      </React.Fragment>
                    )}
                    />
                    <Route path="/CreateFolder" component={CreateFolder} />
                    <Route path="/AddNote" component={AddNote} />
                  </div>
                </div>
              </div>
            </div>
          </Switch>
        </main>
      </Router >
    );
  }
}

export default App;
