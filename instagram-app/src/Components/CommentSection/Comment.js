import React from 'react'
import './CommentSection.css'

const Comment = props => {
  // console.log('com:',props);
  return (
    <div>
      <a href='#'>
        {props.com.username}
      </a>
      <span>
        {`: ${props.com.text}`}
      </span>
    </div>
  );
}

export default Comment;
