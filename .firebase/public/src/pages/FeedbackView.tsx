import React from 'react';
import { Star, ThumbsUp, MessageCircle, Clock } from 'lucide-react';

const FeedbackView = () => {
  const feedback = {
    videoTitle: "Introduction Speech",
    professional: "Dr. Emily Chen",
    date: "2024-03-15",
    rating: 4,
    feedback: `Your introduction speech shows great potential! Here are my observations:

Strengths:
- Clear and confident opening
- Good eye contact with the camera
- Well-structured content

Areas for Improvement:
- Pace could be more varied for emphasis
- Consider using more hand gestures
- Add more vocal variety in key points

Overall, you've done a commendable job. Keep practicing these points and you'll see significant improvement in your next presentation.`,
    timestamp: "2:15",
    thumbnailUrl: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="relative">
          <img
            src={feedback.thumbnailUrl}
            alt={feedback.videoTitle}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded">
            <Clock className="inline h-4 w-4 mr-1" />
            {feedback.timestamp}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{feedback.videoTitle}</h1>
              <div className="flex items-center text-gray-600">
                <span className="mr-4">Reviewed by {feedback.professional}</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {feedback.date}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-700">
              {feedback.feedback}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
            <ThumbsUp className="h-5 w-5" />
            <span>Helpful</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
            <MessageCircle className="h-5 w-5" />
            <span>Reply</span>
          </button>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Request Follow-up
        </button>
      </div>
    </div>
  );
};

export default FeedbackView;