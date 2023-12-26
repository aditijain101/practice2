import './App.css';
import React from 'react';
import Header from './components/Header';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from '../src/components/Home';

function App() {
  return (
    <div className="app-container" style={{ height: '90vh', width: '100vw' }}>
      <React.Fragment>
        <header style={{height:"10%"}}>
          <Header />
        </header>
        <main style={{height:"90%"}}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            {/* Other routes */}
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
