import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css';

const PostContainer = props => {
  console.log(props);
  return (
    <div className="postcontainer">
      <a href="#">
        <img src={props.eachPost.thumbnailUrl}/>
        {props.eachPost.username}
      </a><br/>
      <img src={props.eachPost.imageUrl} />
      <p>{`${props.eachPost.likes} Likes`}</p>
      <CommentSection comments={props.eachPost.comments}/>
    </div>
  );
}

export default PostContainer;
