import React from 'react';
import { Clock, CheckCircle, User } from 'lucide-react';

const ProfessionalDashboard = () => {
  const pendingReviews = [
    {
      id: 1,
      candidate: "Alex Johnson",
      title: "Sales Pitch",
      submitted: "2024-03-10",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=300&q=80"
    }
  ];

  const completedReviews = [
    {
      id: 2,
      candidate: "Sarah Smith",
      title: "Introduction Speech",
      reviewDate: "2024-03-15",
      rating: 4.5,
      thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Professional Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Available for Reviews
          </span>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pendingReviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative">
                <img
                  src={review.thumbnail}
                  alt={review.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{review.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      <span>{review.candidate}</span>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Review
                  </button>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  Submitted {review.submitted}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Completed Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {completedReviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative">
                <img
                  src={review.thumbnail}
                  alt={review.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Completed
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{review.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      <span>{review.candidate}</span>
                    </div>
                  </div>
                  <div className="text-yellow-500">
                    {"★".repeat(Math.floor(review.rating))}
                    {review.rating % 1 !== 0 && "½"}
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  Reviewed {review.reviewDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">15</div>
            <div className="text-gray-600">Total Reviews</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-gray-600">Pending Reviews</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">24h</div>
            <div className="text-gray-600">Avg. Response Time</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalDashboard;