import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, CheckCircle, AlertCircle, ChevronRight, ChevronDown } from 'lucide-react';

interface Question {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeLimit: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Opening Statement Practice",
    description: "Present an opening statement for a mock trial involving a contract dispute between a small business owner and a supplier. Focus on establishing credibility and outlining key points.",
    difficulty: "Beginner",
    timeLimit: "3-5 minutes",
    answer: "A strong opening statement should include:\n\n1. A compelling hook that grabs attention\n2. Clear statement of the dispute's nature\n3. Preview of key evidence\n4. Establishment of credibility\n5. Clear request for relief\n\nExample structure:\n- Introduction that humanizes your client\n- Brief overview of the contract terms\n- Specific instances of breach\n- Impact on your client's business\n- Clear statement of damages sought"
  },
  {
    id: 2,
    title: "Expert Witness Examination",
    description: "Conduct a direct examination of a medical expert in a personal injury case. Focus on establishing credentials and eliciting clear testimony about causation.",
    difficulty: "Intermediate",
    timeLimit: "4-6 minutes",
    answer: "Key elements of expert witness examination:\n\n1. Qualification establishment\n2. Clear foundation for opinions\n3. Use of hypotheticals\n4. Simple language for complex concepts\n5. Strong conclusion tying evidence to case"
  }
];

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadStatus('uploading');
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploadStatus('success');
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.webm']
    },
    maxFiles: 1
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{question.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium
                ${question.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  question.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'}`}>
                {question.difficulty}
              </span>
            </div>
            <p className="text-sm text-gray-500">Time Limit: {question.timeLimit}</p>
          </div>
          {isExpanded ? <ChevronDown className="h-5 w-5 text-gray-400" /> : 
                       <ChevronRight className="h-5 w-5 text-gray-400" />}
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 border-t border-gray-100">
          <p className="text-gray-700 mb-6">{question.description}</p>

          {uploadStatus === 'success' ? (
            <div className="space-y-6">
              <div className="flex items-center text-green-600 mb-4">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Video uploaded successfully!</span>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Model Answer</h4>
                <div className="whitespace-pre-wrap text-gray-700">
                  {question.answer}
                </div>
              </div>

              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Try Another Question
              </button>
            </div>
          ) : (
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600">
                {isDragActive
                  ? "Drop your video here"
                  : "Record or upload your response"}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                MP4, MOV, AVI, or WebM • {question.timeLimit} max
              </p>
            </div>
          )}

          {uploadStatus === 'uploading' && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Uploading...</span>
                <span className="text-sm text-gray-500">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {uploadStatus === 'error' && (
            <div className="flex items-center text-red-600 mt-4">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>Upload failed. Please try again.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const PracticeQuestions = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Practice Questions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enhance your advocacy skills with our curated questions. Record your responses
          and compare them with model answers from experienced professionals.
        </p>
      </div>

      <div className="space-y-6">
        {questions.map(question => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default PracticeQuestions;