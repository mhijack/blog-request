import React, { Component } from 'react';
import axios from '../../../axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Jack',
        submitted: false,
    }

    componentDidMount = () => {
        console.log(this.props);
    }

    submitPost = () => {
        const { title, body, author } = this.state;
        const post = {
            title,
            body,
            author
        }

        axios.post('/posts', post).then(res => {
            alert('New post created!');
            this.props.history.push("/posts");
        })
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }

        return (
            <div className="NewPost">

                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Jack">Jack</option>
                    <option value="Melody">Melody</option>
                </select>
                <button onClick={this.submitPost}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;