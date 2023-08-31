import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StateProvider } from './utils/context/index';
import Home from './pages/Home';

function App() {
  return (
    <React.StrictMode>
      <StateProvider>
        <React.Fragment>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </React.Fragment>
      </StateProvider>
    </React.StrictMode>
  );
}

export default App;
