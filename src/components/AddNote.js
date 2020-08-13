import React, { Component } from 'react'
import Folders from './Folders';

export class AddNote extends Component {

    state = {
        title: '',
        note: '',
        folder: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNote(this.state.title);
        this.props.addNote(this.state.note);
        this.setState({ title: '', note: '' });
    }

    onAdd = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        return (

            <form onSubmit={this.onSubmit} >
                <fieldset>
                    <legend>Create a note</legend>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add Title"
                        value={this.state.title}
                        onChange={this.onAdd}
                    />
                    <input
                        type="text"
                        name="note"
                        placeholder="Add Note"
                        value={this.state.note}
                        onChange={this.onAdd}
                    />
                    <select id="folders">
                        <option>{Folders.folders[0].name}</option>
                        <option>{Folders.folders[1].name}</option>
                        <option>{Folders.folders[2].name}</option>
                    </select>

                    <input type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: "1" }}
                    />



                </fieldset>
            </form>
        )
    }
}

export default AddNote
