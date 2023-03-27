import React from 'react';
import { Counter } from './Counter/Counter';
import './App.css';

function App() {
    return <>
        <header className='App-header'>
            <h1>Counting Calculator</h1>
        </header>
        <main className='App-main'>
            <Counter />
        </main>
    </>
}

export default App;