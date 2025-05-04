import QuizCard from "./QuizeCart";
const MyQuizComponent = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    // ... more questions
  ];

  return (
    <div>
      {/* Map through questions and render QuizCard for each */}
      {questions.map((question, index) => (
        <QuizCard
          key={index}
          question={question.question}
          options={question.options}
          correctAnswer={question.correctAnswer}
        />
      ))}
    </div>
  );
};
export default MyQuizComponent;