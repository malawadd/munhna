import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./app/components/Header/Header";
import { useWalletSlice } from "./app/slice/wallet.slice";
import useMetamaskProvider from "./app/customHooks/useMetamaskProvider";
import { routes } from "./utils/routes";
import HomePage from "./app/containers/HomePage";

function App() {
  useWalletSlice();

  const { detectNetworkChange } = useMetamaskProvider();
  const dispatch = useDispatch();
  useEffect(() => {
    const removeListener = detectNetworkChange();
    

    return removeListener;
    // For detectNetwork change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  

  return (
    <Router>
   
    <div className="App">
       <Header />
       <Routes>
          <Route path={routes.homepage} element={<HomePage />} />
        </Routes>

    </div>
    </Router>
  );
}

export default App;
