import * as React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupScreen from './screens/SignupScreen';
import WorkSpace from './components/WorkSpace/WorkSpace';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/signup' element={<SignupScreen/>}/>
        <Route path='/workspace' element={<WorkSpace/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
