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
      <img src="https://ui-ex.com/images/svg-heart-black-and-white-2.png" width="30px"/>
      <img src={"Components/PostContainer/camera-logo.scg"} />
      <p>{`${props.eachPost.likes} Likes`}</p>
      <CommentSection comments={props.eachPost.comments}/>
    </div>
  );
}

export default PostContainer;
