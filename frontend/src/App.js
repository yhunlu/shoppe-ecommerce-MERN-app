import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components';
import Header from './components/Header';
import { HomeScreen } from './screens';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
