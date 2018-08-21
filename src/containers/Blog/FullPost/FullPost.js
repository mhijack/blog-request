import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount = () => {
        console.log(this.props.match.params)
        this.loadData();
    }

    componentDidUpdate = () => {
        this.loadData();
    }

    loadData = () => {
        if (this.props.match.params.id) {
            // Only send out request if we're asking for a new post
            if ((this.state.loadedPost === null) || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get(`/posts/${this.props.match.params.id}`).then(res => {
                    this.setState({
                        loadedPost: res.data
                    })
                })
            }
        }
    }

    handleDelete = () => {
        console.log(this.props.match)
        axios.delete(`/posts/${this.props.match.params.id}`).then(res => {
            console.log(res);
        })
    }

    render () {
        let post = <p style={{textAlign: 'center' }}>Please select a Post!</p>;

        // Show loading page while waiting for response from api
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center' }}>Loading</p>
        }

        // Only render post detail once we got response
        if (this.state.loadedPost) {
                post = (
                    <div className="FullPost">
                        <h1>{this.state.loadedPost.title}</h1>
                        <p>{this.state.loadedPost.body}</p>
                        <div className="Edit">
                            <button className="Delete" onClick={this.handleDelete}>Delete</button>
                        </div>
                    </div>
                );
        }
        return post;
    }
}

export default FullPost;