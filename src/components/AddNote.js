import React, { Component } from 'react'
import Context from '../Context';

export class AddNote extends Component {

    static contextType = Context;

    state = {
        name: '',
        content: '',
        folderId: '',
        modified: new Date()
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.context.addNote(this.state);
        this.setState({ name: '', content: '', folderId: '' });
        this.props.history.push('/')
    }

    onAdd = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        return (

            <form onSubmit={this.onSubmit} >
                <fieldset>
                    <legend>Create a note</legend>
                    <input
                        type="text"
                        name="name"
                        placeholder="Note Name"
                        aria-label="Note Name"
                        value={this.state.name}
                        onChange={this.onAdd}
                    />
                    <input
                        type="text"
                        name="content"
                        placeholder="Note Content"
                        aria-label="Note Content"
                        value={this.state.content}
                        onChange={this.onAdd}
                    />
                    <select id="folders" name="folderId" value={this.state.folderId} onChange={this.onAdd}>
                        <option value="">Select Folder...</option>
                        {this.context.folders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>)}
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
