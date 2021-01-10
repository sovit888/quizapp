import React from 'react';
import './test.css';
import Quiz from './Quiz';
import { quizList } from './List';

const Test = () => {
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    let data = Math.floor(Math.random() * 2);
    console.log(data);
  }, [count]);
  return (
    <>
      <div className='quiz-progress'>
        <p>Questions {count} of 4</p>
      </div>
      <Quiz quiz={quizList[0]} count={count} setCount={setCount} />
    </>
  );
};

export default Test;
