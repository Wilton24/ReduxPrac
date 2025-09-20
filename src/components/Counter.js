import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index.js';

// const Counter = () => {
// const dispatch = useDispatch();
// const counter = useSelector((state) => state.counter);

// const toggleCounterHandler = () => { };

// const incrementHandler = () => {
//   dispatch({ type: 'INCREMENT' });
// };

// const decrementHandler = () => {
//   dispatch({ type: 'DECREMENT' });
// };

// console.log(counter);


// return (
//   <main className={classes.counter}>
//     <h1>Redux Counter</h1>
//     <div className={classes.value}>{counter}</div>
//     <div>
//       <button onClick={incrementHandler}>Increment</button>
//       <button onClick={decrementHandler}>Decrement</button>
//     </div>
//     <button onClick={toggleCounterHandler}>Toggle Counter</button>
//   </main>
// );
// };

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  incrementHandler() {
    this.props.increment();
  };

  incrementBy5Handler() {
    this.props.incrementBy5();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    this.props.toggle();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.showCounter && <div className={classes.value}>{this.props.counter}</div>}
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.incrementBy5Handler.bind(this)}>Increase by 5</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    counter: state.count,
    showCounter: state.showCounter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    incrementBy5: () => dispatch(counterActions.incrementBy5()),
    decrement: () => dispatch(counterActions.decrement()),
    toggle: () => dispatch(counterActions.toggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
