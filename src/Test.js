import React from 'react';
import './test.css';
import Quiz from './Quiz';
import { quizList } from './List';

const handleIndex = (array) => {
  let length = quizList.length;
  let index = Math.floor(Math.random() * length);
  while (array.includes(index) && array.length > 0) {
    index = Math.floor(Math.random() * length);
  }
  return index;
};

const Test = () => {
  const [count, setCount] = React.useState(1);
  const [queslist, setqueList] = React.useState([0]);
  const [index, setIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const handleNext = () => {
    let newIndex = handleIndex(queslist);
    setIndex(newIndex);
    setqueList([...queslist, newIndex]);
  };

  const handleReset = (event) => {
    setqueList([3]);
    setCount(1);
    setScore(0);
    setIndex(3);
  };
  return (
    <>
      {count <= 4 ? (
        <>
          <div className='quiz-progress'>
            <p>Questions {count} of 4</p>
          </div>
          <Quiz
            quiz={quizList[index]}
            count={count}
            setCount={setCount}
            handleNext={handleNext}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <>
          <h1>You have scored {score} out of 4</h1>
          <div className='btn-reset'>
            <button onClick={handleReset}>Play Again</button>
          </div>
        </>
      )}
    </>
  );
};

export default Test;
