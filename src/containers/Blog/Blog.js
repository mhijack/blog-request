import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount = () => {
        axios
            .get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => ({
                    ...post,
                    author: 'Jack'
                }));
                this.setState({ posts: updatedPosts });
            })
            .catch(err => {
                this.setState({ error: true });
            });
    };

    handleClick = id => {
        this.setState({ selectedPostId: id });
    };

    render() {
        let posts = (
            <p style={{ textAlign: 'center' }}>Something went wrong.</p>
        );

        // Error checking
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                <Post
                    title={post.title}
                    author={post.author}
                    key={post.id}
                    handleClick={() => this.handleClick(post.id)}
                />
            ));
        }

        return (
            <div>
                <section className="Posts">{posts}</section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
