import React, { useContext } from 'react';
import { MainProvider } from './contexts/MainProvider';
import Home from './pages/Home'

function App() {
  return (
    <MainProvider>
      <div className="App">
        <Home />
      </div>
    </MainProvider>
  )
}

export default App