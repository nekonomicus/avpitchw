import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Challenge from './pages/Challenge';
import Proposal from './pages/Proposal';
import Technologies from './pages/Technologies';
import ScientificBasis from './pages/ScientificBasis';
import Advantages from './pages/Advantages';
import Opportunity from './pages/Opportunity';
import Budget from './pages/Budget';
import Future from './pages/Future';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Challenge />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/scientific-basis" element={<ScientificBasis />} />
            <Route path="/advantages" element={<Advantages />} />
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/future" element={<Future />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;