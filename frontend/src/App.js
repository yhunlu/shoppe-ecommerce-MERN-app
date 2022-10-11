import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { HomeScreen } from './screens';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
