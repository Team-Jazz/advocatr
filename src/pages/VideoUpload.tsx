import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

const VideoUpload = () => {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

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
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Video</h1>
        <p className="text-gray-600">
          Share your speaking video and receive professional feedback to improve your skills
        </p>
      </div>

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
            : "Drag and drop your video, or click to select"}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Supported formats: MP4, MOV, AVI, WebM
        </p>
      </div>

      {uploadStatus !== 'idle' && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            {uploadStatus === 'uploading' && (
              <>
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
              </>
            )}
            {uploadStatus === 'success' && (
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Upload complete! We'll notify you when feedback is ready.</span>
              </div>
            )}
            {uploadStatus === 'error' && (
              <div className="flex items-center text-red-600">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span>Upload failed. Please try again.</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Tips for a Great Video</h2>
        <ul className="space-y-2 text-gray-600">
          <li>• Ensure good lighting and clear audio</li>
          <li>• Keep the video between 2-5 minutes</li>
          <li>• Face the camera directly</li>
          <li>• Speak clearly and at a moderate pace</li>
          <li>• Choose a quiet environment</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoUpload;