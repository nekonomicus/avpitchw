import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">VR Surgery Training App</h1>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <p className="text-xl">Welcome to our VR Surgery Training App pitch!</p>
        </main>
        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; 2023 VR Surgery Training App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;