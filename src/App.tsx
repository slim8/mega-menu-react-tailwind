import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Our Website</h1>
          <p className="mt-4 text-lg text-gray-600">Explore our products and services using the navigation menu above.</p>
        </div>
      </main>
    </div>
  );
}

export default App;