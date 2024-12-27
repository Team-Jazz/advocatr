import { useState } from 'react';
import QuestionForm from '../components/practice/QuestionForm';
import QuestionList from '../components/practice/QuestionList';
import { Question } from '../types/practice';

const PracticeQuestionsManagement = () => {
  const [questions, setQuestions] = useState<Question[]>([
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
  ]);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  const handleSave = (question: Question) => {
    if (editingQuestion) {
      setQuestions(questions.map(q => q.id === question.id ? question : q));
    } else {
      setQuestions([...questions, { ...question, id: questions.length + 1 }]);
    }
    setEditingQuestion(null);
  };

  const handleEdit = (question: Question) => {
    setEditingQuestion(question);
  };

  const handleDelete = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Manage Practice Questions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create and manage practice questions for candidates to enhance their advocacy skills.
        </p>
      </div>

      <QuestionForm
        onSave={handleSave}
        initialQuestion={editingQuestion}
        onCancel={() => setEditingQuestion(null)}
      />

      <QuestionList
        questions={questions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PracticeQuestionsManagement;