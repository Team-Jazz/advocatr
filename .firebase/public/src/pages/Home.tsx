import React from 'react';
import { Link } from 'react-router-dom';
import { Video, MessageSquare, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Get feedback and improve your oral advocacy.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upload your speaking videos and receive personalised feedback from proper good barristers to improve your advocating skills.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/upload"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 flex items-center gap-2"
          >
            Upload Your Video <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <Video className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Video Upload</h3>
          <p className="text-gray-600">
            Simply record or upload your speaking video in any common format. We make it easy to share your content.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <MessageSquare className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Feedback</h3>
          <p className="text-gray-600">
            Receive detailed feedback from professionals who understand effective communication.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <Star className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Improve & Excel</h3>
          <p className="text-gray-600">
            Use the personalized feedback to enhance your speaking skills and boost your confidence.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-indigo-600">1</span>
            </div>
            <h3 className="font-semibold mb-2">Upload Your Video</h3>
            <p className="text-gray-600">Record or upload your speaking video</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-indigo-600">2</span>
            </div>
            <h3 className="font-semibold mb-2">Get Matched</h3>
            <p className="text-gray-600">We'll connect you with the right professional</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-indigo-600">3</span>
            </div>
            <h3 className="font-semibold mb-2">Receive Feedback</h3>
            <p className="text-gray-600">Get detailed feedback and improvement tips</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;