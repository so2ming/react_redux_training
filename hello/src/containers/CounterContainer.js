// 카운터 컨테이너 만들기
import React, { Component } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as counterActions from '../store/modules/counter';

class CounterContainer extends Component {
   
    handleIncrement = () => {
        this.props.increment();
    }
    handleDecrement = () => {
        this.props.decrement();
    }
    render() {
        const { handleIncrement, handleDecrement } = this;
        const { number } = this.props;
        return(
            <Counter
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            number={number} />
        );
    }
}
export default connect(
    
    (state) => ({
        number: state.number
      }), 
      (dispatch) => ({
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement())
      })
    )(CounterContainer);