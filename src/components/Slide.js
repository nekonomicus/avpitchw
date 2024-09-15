import React from 'react';

function Slide({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">{title}</h2>
      <div className="prose max-w-none">{children}</div>
    </div>
  );
}

export default Slide;