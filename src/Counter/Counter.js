import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setCount,
    setDifference,
    addToPrevious,
    removeFromPrevious,
    incrementValue,
    decrementValue,
    incrementDifference,
    decrementDifference,
    selectCount,
    selectPrevious,
    selectDifference
} from './counterSlice';
import './Counter.css';

export const Counter = () => {
    const count = useSelector(selectCount);
    const prev = useSelector(selectPrevious);
    const diff = useSelector(selectDifference);
    const dispatch = useDispatch();

    const [focus, setFocus] = useState('COUNT_DISPLAY');
    const changeDisplay = (num) => {
        switch (focus) {
            case 'COUNT_DISPLAY':
                const addValue = [count, num].join('');
                dispatch(setCount(Number(addValue) || 0));
                break;
            case 'DIFFERENCE_DISPLAY':
                const addDiff = [diff, num].join('');
                dispatch(setDifference(Number(addDiff) || 0));
                break;
            default:
                console.log('No focus selected');
        }
    }
    const increment = () => {
        switch (focus) {
            case 'COUNT_DISPLAY':
                dispatch(addToPrevious(count));
                dispatch(incrementValue());
                break;
            case 'DIFFERENCE_DISPLAY':
                dispatch(incrementDifference());
                break;
            default:
                console.log('Cannot increment');
        }
    }
    const decrement = () => {
        switch (focus) {
            case 'COUNT_DISPLAY':
                dispatch(addToPrevious(count));
                dispatch(decrementValue());
                break;
            case 'DIFFERENCE_DISPLAY':
                dispatch(decrementDifference());
                break;
            default:
                console.log('Cannot decrement');
        }
    }
    const remove = () => {
        const num = (prev.length)? prev[prev.length - 1]: 0;
        dispatch(setCount(Number(num)));
        dispatch(removeFromPrevious());
    }

    return <div className='page-container'>
        <div className='container'>
            <div className='row'>
                <button
                    className='disp-btn active'
                    aria-label='Set count'
                    onClick={() => setFocus('COUNT_DISPLAY')}
                >{count}</button>
                <button
                    className='disp-btn'
                    aria-label='Set difference amount'
                    onClick={() => setFocus('DIFFERENCE_DISPLAY')}
                >{diff}</button>
            </div>
            <div className='row'>
                <button
                    className='reset-btn'
                    aria-label='Reset count to last value'
                    onClick={() => remove()}
                >Previous Count</button>
                <button
                    className='reset-btn'
                    aria-label='Reset count to 0'
                    onClick={() => dispatch(setCount(0))}
                >Reset Count</button>
                <button
                    className='reset-btn'
                    aria-label='Set difference to 0'
                    onClick={() => dispatch(setDifference(0))}
                >Zero Difference</button>
            </div>
            <div className='row'>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(1)}
                >1</button>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(2)}
                >2</button>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(3)}
                >3</button>
                <button
                    className='op-btn'
                    onClick={() => increment()}
                >+</button>
            </div>
            <div className='row'>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(4)}
                >4</button>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(5)}
                >5</button>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(6)}
                >6</button>
                <button
                    className='op-btn'
                    onClick={() => decrement()}
                >-</button>
            </div>
            <div className='row'>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(7)}
                >7</button>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(8)}
                >8</button>
                <button
                    className='num-btn'
                    onClick={() => changeDisplay(9)}
                >9</button>
                <button
                    className='op-btn'
                    onClick={() => changeDisplay(0)}
                >0</button>
            </div>
        </div>
        <div className='container counter-desc'>
            <p><strong>How to Use:</strong> Select the count (left) or the difference (right), default count selected. The count and difference can changed by using the number keys, though if you want to change the difference, first zero it with the 'zero difference' key.</p>
            <p>When you press + or -, the count will be incremented or decremented by the difference, while the difference will be incremented or decremented by 1.</p>
        </div>
    </div>
}