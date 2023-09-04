import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0,
      inputValue: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleClick = (e) => {
    const addition =
      parseInt(this.state.output) + parseInt(this.state.inputValue);
    this.setState({
      output: addition,
    });
  };
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <h5>Typed value: {this.state.inputValue}</h5>

        <button onClick={this.handleClick}>+</button>
        <h4> The result is: {this.state.output}</h4>
      </div>
    );
  }
}

export default Calculator;
