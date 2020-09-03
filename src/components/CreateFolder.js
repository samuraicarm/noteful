import React, { Component } from 'react'
import Context from '../Context';

export class CreateFolder extends Component {

    static contextType = Context;

    state = {
        name: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.context.addFolder(this.state);
        this.setState({ name: '' });
        this.props.history.push('/')
    }

    onAdd = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <fieldset>
                    <legend>Create a Folder</legend>
                    <input
                        type="text"
                        name="name"
                        placeholder="Add Folder Name"
                        aria-label="Folder Name"
                        value={this.state.name}
                        onChange={this.onAdd}
                    />

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


export default CreateFolder
