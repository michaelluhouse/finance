import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';

import One from './pages/data/folder1/one.jsx';
import Two from './pages/data/folder2/two.jsx';
import Three from './pages/data/folder3/three.jsx';
import Four from './pages/data/folder4/four.jsx';
import Five from './pages/data/folder5/five.jsx';
import Six from './pages/data/folder6/six.jsx';
import Seven from './pages/data/folder7/seven.jsx';
import Eight from './pages/data/folder8/eight.jsx';
import Nine from './pages/data/folder9/nine.jsx';
import Ten from './pages/data/folder10/ten.jsx';
import Eleven from './pages/data/folder11/eleven.jsx';
import Twelve from './pages/data/folder12/twelve.jsx';
import Thirteen from './pages/data/folder13/thirteen.jsx';
import Fourteen from './pages/data/folder14/fourteen.jsx';
import Fifteen from './pages/data/folder15/fifteen.jsx';
import Sixteen from './pages/data/folder16/sixteen.jsx';
import Seventeen from './pages/data/folder17/seventeen.jsx';
import Eighteen from './pages/data/folder18/eighteen.jsx';
import Nineteen from './pages/data/folder19/nineteen.jsx';
import Twenty from './pages/data/folder20/twenty.jsx';


function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/1' element={<One />} />
        <Route exact path='/2' element={<Two />} />
        <Route exact path='/3' element={<Three />} />
        <Route exact path='/4' element={<Four />} />
        <Route exact path='/5' element={<Five />} />
        <Route exact path='/6' element={<Six />} />
        <Route exact path='/7' element={<Seven />} />
        <Route exact path='/8' element={<Eight />} />
        <Route exact path='/9' element={<Nine />} />
        <Route exact path='/10' element={<Ten />} />
        <Route exact path='/11' element={<Eleven />} />
        <Route exact path='/12' element={<Twelve />} />
        <Route exact path='/13' element={<Thirteen />} />
        <Route exact path='/14' element={<Fourteen />} />
        <Route exact path='/15' element={<Fifteen />} />
        <Route exact path='/16' element={<Sixteen />} />
        <Route exact path='/17' element={<Seventeen />} />
        <Route exact path='/18' element={<Eighteen />} />
        <Route exact path='/19' element={<Nineteen />} />
        <Route exact path='/20' element={<Twenty />} /> 
      </Routes>
  );
}

export default App;
