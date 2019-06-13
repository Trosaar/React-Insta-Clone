import React from 'react';
import dummyData from './dummy-data.js';
import PostContainer from './Components/PostContainer/PostContainer.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={dummyData};
  }

  // createNewPost = post => {
  //   const newPost = {
  //     text: post,
  //     id: Date.now(),
  //   };
  //
  //   this.setState({
  //     dummyData: [...this.state.dummyData, newPost]
  //   });
  // }

  render(){
    console.log('App info:',this.state);
    return(
      <div>
      <form action="/action_page.php">
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit">Find it</button>
      </form>
        {this.state.dummyData.map( post => { return (
          <PostContainer eachPost={post} key={post.id}/>
        )})}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           stuff.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
