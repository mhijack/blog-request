import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import { Route, Link } from 'react-router-dom';

import axios from '../../../axios';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    };

    componentDidMount = () => {
        console.log(this.props);

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
                console.log(err);
            });
    };

    handleClick = id => {
        this.props.history.push({
            pathname: this.props.match.url + "/" + id,
        })
    };

    render() {
        let posts = (
            <p style={{ textAlign: 'center' }}>Something went wrong.</p>
        );

        // Error checking
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                // <Link to={`/${post.id}`} key={post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                        handleClick={() => this.handleClick(post.id)}
                        key={post.id}
                        // {...this.props}
                    />
                // </Link>
            ));
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;