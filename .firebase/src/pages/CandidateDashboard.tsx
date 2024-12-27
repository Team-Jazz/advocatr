import React from 'react';
import { Play, Clock, MessageSquare } from 'lucide-react';

const CandidateDashboard = () => {
  const submissions = [
    {
      id: 1,
      title: "Introduction Speech",
      date: "2024-03-15",
      status: "Feedback Ready",
      thumbnail: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Sales Pitch",
      date: "2024-03-10",
      status: "Pending Review",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Submissions</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          New Submission
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {submissions.map(submission => (
          <div key={submission.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative">
              <img
                src={submission.thumbnail}
                alt={submission.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="h-12 w-12 text-white" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{submission.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  submission.status === "Feedback Ready"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {submission.status}
                </span>
              </div>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {submission.date}
                </span>
                {submission.status === "Feedback Ready" && (
                  <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    View Feedback
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">2</div>
            <div className="text-gray-600">Total Submissions</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-gray-600">Completed Reviews</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-gray-600">Pending Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;