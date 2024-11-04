import React, { useState } from 'react';
import { User, Users, ArrowRight } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

const Auth = () => {
  const [view, setView] = useState<'select' | 'candidate-login' | 'professional-login' | 'candidate-register' | 'professional-register'>('select');

  const renderUserTypeSelection = () => (
    <div className="grid md:grid-cols-2 gap-6">
      <button
        onClick={() => setView('candidate-login')}
        className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-indigo-500 hover:shadow-md transition-all group"
      >
        <User className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-semibold mb-2">I'm a Candidate</h3>
        <p className="text-gray-600 mb-4">Looking to improve my speaking skills and receive professional feedback</p>
        <span className="text-indigo-600 flex items-center group-hover:gap-2">
          Continue <ArrowRight className="h-4 w-4 ml-1" />
        </span>
      </button>

      <button
        onClick={() => setView('professional-login')}
        className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-indigo-500 hover:shadow-md transition-all group"
      >
        <Users className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-semibold mb-2">I'm a Professional</h3>
        <p className="text-gray-600 mb-4">Ready to provide expert feedback and help others improve</p>
        <span className="text-indigo-600 flex items-center group-hover:gap-2">
          Continue <ArrowRight className="h-4 w-4 ml-1" />
        </span>
      </button>
    </div>
  );

  const getTitle = () => {
    switch (view) {
      case 'select':
        return 'Welcome to SpeakFeedback';
      case 'candidate-login':
      case 'professional-login':
        return 'Sign in to your account';
      case 'candidate-register':
      case 'professional-register':
        return 'Create your account';
      default:
        return '';
    }
  };

  const getSubtitle = () => {
    switch (view) {
      case 'candidate-login':
      case 'candidate-register':
        return 'Candidate Portal';
      case 'professional-login':
      case 'professional-register':
        return 'Professional Portal';
      default:
        return 'Choose your role to continue';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">{getTitle()}</h2>
        <p className="mt-2 text-gray-600">{getSubtitle()}</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md md:max-w-2xl">
        {view === 'select' ? (
          renderUserTypeSelection()
        ) : (
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {view === 'candidate-login' && (
              <LoginForm 
                userType="candidate"
                onRegister={() => setView('candidate-register')}
                onBack={() => setView('select')}
              />
            )}
            {view === 'professional-login' && (
              <LoginForm 
                userType="professional"
                onRegister={() => setView('professional-register')}
                onBack={() => setView('select')}
              />
            )}
            {view === 'candidate-register' && (
              <RegisterForm 
                userType="candidate"
                onLogin={() => setView('candidate-login')}
                onBack={() => setView('select')}
              />
            )}
            {view === 'professional-register' && (
              <RegisterForm 
                userType="professional"
                onLogin={() => setView('professional-login')}
                onBack={() => setView('select')}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;