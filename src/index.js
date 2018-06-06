import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// the first time the reducer is called, it will pass undefined as the state
// this means returning an initial state is probably a good idea
// common practice is to write the initial state above the reducer and use ES6's default
// argument feature to provide a value for the state argument when it's undefined
const initialState = {
    count: 0
};

// the reducer takes a current state, does an action and returns the new state
// an action is a JS object that describes the change we want to make, it requires a 'type' property that is a string
// remember - DON'T MUTATE STATE DIRECTLY, it is immutable
function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

// function to create a store for the data that redux's Provider needs
const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

render(<App />, document.getElementById('root'));