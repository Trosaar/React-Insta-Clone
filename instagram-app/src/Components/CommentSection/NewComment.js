import React from 'react';

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      text:'',
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.create(this.state.text);
    this.setState({
      text:''
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
      <input type="text" placeholder="Comment..." name="text" value={this.state.text} onChange={this.changeHandler} />
      <button type="submit">Add</button>
      </form>
    );
  };
};


export default NewComment;
