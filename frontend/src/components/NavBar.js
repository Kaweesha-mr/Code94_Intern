// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-primaryGreen p-5 flex justify-evenly items-center">
      {/* Home link */}
      <Link to="/" className="text-primaryWhite hover:text-secondaryGreen">
        Home
      </Link>
      
      {/* Refresh button */}
      <button onClick={() => window.location.reload()} className="text-primaryWhite bg-secondaryGreen hover:bg-primaryGreen p-1 rounded-md">
        Refresh
      </button>
    </nav>
  );
}
