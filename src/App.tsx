import QuestionCard from './components/QuestionCard';

function App() {
  const startQuiz = () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div>
      <h1>Quiz</h1>
      <button className="start-btn" onClick={startQuiz}></button>
      <p className="score">Score:</p>
      <p>Loading...</p>
      <QuestionCard />
      <button className="next-btn" onClick={nextQuestion}></button>
    </div>
  );
}

export default App;
