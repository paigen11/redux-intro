import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    increment = () => {
        this.props.dispatch({ type: "INCREMENT" });
    };

    decrement = () => {
        this.props.dispatch({ type: "DECREMENT" });
    };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

// connect is a higher-order function / component (it returns a function when called, and
// calling that function with a component returns a new (wrapped component))
// the object from mapStateToProps gets fed into the Counter component as props
// keys in the object become prop names and values become prop values
// the function defines a mapping from state into props
// connect also injects the dispatch function as a prop, which is needed to make the action happen in the reducer
export default connect(mapStateToProps)(Counter);