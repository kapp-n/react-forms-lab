import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };

  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }
  

  render() {
    const chars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <p>{chars}</p>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
