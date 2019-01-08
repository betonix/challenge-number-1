import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <PostHeader post={this.props.post} />
        <p>{this.props.post.text}</p>
      </div>
    );
  }
}
