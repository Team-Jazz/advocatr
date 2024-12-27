import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import CandidateDashboard from './pages/CandidateDashboard';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import VideoUpload from './pages/VideoUpload';
import FeedbackView from './pages/FeedbackView';
import AccountSettings from './components/auth/AccountSettings';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/candidate" element={<CandidateDashboard />} />
            <Route path="/professional" element={<ProfessionalDashboard />} />
            <Route path="/upload" element={<VideoUpload />} />
            <Route path="/feedback/:id" element={<FeedbackView />} />
            <Route path="/settings" element={<AccountSettings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;