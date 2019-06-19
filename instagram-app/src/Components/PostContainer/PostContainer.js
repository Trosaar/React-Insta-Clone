import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import heart from "./heart-regular.svg"
import './PostContainer.css';

// const PostContainer = props => {
//   console.log(props);
//   return (
//     <div className="postcontainer">
//       <a href="#">
//         <img src={props.eachPost.thumbnailUrl}/>
//         {props.eachPost.username}
//       </a><br/>
//       <img src={props.eachPost.imageUrl} />
//       <br/>
//       <img src={heart} onClick={props.likeCounter} width="30px"/>
//       <p>{`${props.eachPost.likes} Likes`}</p>
//       <CommentSection comments={props.eachPost.comments}/>
//     </div>
//   );
// }

class PostContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ...props.eachPost,
    }
    console.log(this.state);
  };

  clickHandler = click => {
    this.setState({
      likes:this.state.likes += 1,
    })
    console.log(this.state);
  };

  render(props){
    return(
      <div className="postcontainer">
        <a href="#">
          <img src={this.state.thumbnailUrl}/>
          {this.state.username}
        </a><br/>
        <img src={this.state.imageUrl} />
        <br/>
        <img src={heart} onClick={this.clickHandler} width="30px"/>
        <p>{`${this.state.likes} Likes`}</p>
        <CommentSection comments={this.state.comments}/>
      </div>
    )
  }
}

export default PostContainer;
