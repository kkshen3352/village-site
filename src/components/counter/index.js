import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>
            {count}
          </span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;