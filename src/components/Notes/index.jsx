import React, { Component, PropTypes } from 'react';
import NoteList from './NoteList.jsx';

export default class Notes extends Component {
    static propTypes: {
        username: PropTypes.string.isRequired,
        notes: PropTypes.array.isRequired
    }
    render(){
        return (
            <div>
                <p> 对{this.props.username}评论： </p>
                <NoteList notes={this.props.notes} />
            </div>
        )
    }
}
