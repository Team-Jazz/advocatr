import React from 'react';
import { Link } from 'react-router-dom';
import { Video, MessageSquare, User, Settings } from 'lucide-react';

const Navbar = () => {
  const isLoggedIn = false; // Replace with actual auth state

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Video className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">Advocatr</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            {isLoggedIn ? (
              <>
                <Link to="/upload" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                  <Video className="h-5 w-5" />
                  <span>Upload</span>
                </Link>
                <Link to="/candidate" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                  <User className="h-5 w-5" />
                  <span>Candidates</span>
                </Link>
                <Link to="/professional" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                  <MessageSquare className="h-5 w-5" />
                  <span>Professionals</span>
                </Link>
                <Link to="/settings" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;