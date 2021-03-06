
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from "./pages";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
      </Routes>
    </Router>
  );
} 