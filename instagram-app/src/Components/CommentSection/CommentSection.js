import React from 'react';
import Comment from './Comment.js';
import NewComment from './NewComment'
import './CommentSection.css';

const CommentSection = props => {
  // console.log('comments:',props);
  return (
    <div>
      {props.comments.map(comment => { return(
        <Comment com={comment} key={comment.id}/>
      )})}
      <NewComment />
    </div>
  );
}

export default CommentSection;
