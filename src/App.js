import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import One from './pages/one/one.jsx'

const One = () => (
  <div>
    <h1>第一章节</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/1' component={One} />

        {/* <Route path='/1' component={one} />
        <Route path='/2' component={2} />
        <Route path='/3' component={3} />
        <Route path='/4' component={4} />
        <Route path='/5' component={5} />
        <Route path='/6' component={6} />
        <Route path='/7' component={7} />
        <Route path='/8' component={8} />
        <Route path='/9' component={9} />
        <Route path='/10' component={10} />
        <Route path='/11' component={11} />
        <Route path='/12' component={12} />
        <Route path='/13' component={13} />
        <Route path='/14' component={14} />
        <Route path='/15' component={15} />
        <Route path='/16' component={16} />
        <Route path='/17' component={17} />
        <Route path='/18' component={18} />
        <Route path='/19' component={19} />
        <Route path='/20' component={20} /> */} 
    </div>
  );
}

export default App;
