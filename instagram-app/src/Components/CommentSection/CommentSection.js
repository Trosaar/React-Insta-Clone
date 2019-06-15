import React from 'react';
import Comment from './Comment.js';
import NewComment from './NewComment'
import './CommentSection.css';

// const CommentSection = props => {
//   console.log('comments:',props);
//   return (
//     <div>
//       {props.comments.map(comment => { return(
//         <Comment com={comment} key={comment.id}/>
//       )})}
//       <NewComment />
//     </div>
//   );
// }

class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments};
  }

  createNewPost = post => {
    const newPost = {
      text: post,
      username: "someone",
      id: Date.now(),
    };

    this.setState({
      comments: [...this.state.comments, newPost]
    });
  }

  render(props){
    return(
      <div>
        {this.state.comments.map(comment => { return(
          <Comment com={comment} key={comment.id}/>
        )})}
        <NewComment create={this.createNewPost} />
      </div>
    );
  }
}

export default CommentSection;
