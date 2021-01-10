import React from 'react';
import './quiz.css';

const Quiz = ({ quiz: { question, answer, hints }, count, setCount }) => {
  const [selected, setSelected] = React.useState(null);
  const [correct, setCorrect] = React.useState(-1);
  const [show, setShow] = React.useState(false);
  const handleSelect = (index) => (event) => {
    let value;
    if (index === selected) {
      value = null;
    } else {
      value = index;
    }
    setSelected(value);
  };
  const handleSubmit = (event) => {
    let correctIndex = hints.findIndex(
      (value) => value.toLowerCase() === answer.toLowerCase()
    );
    setCorrect(correctIndex);
    setShow(true);
    setTimeout(() => {
      setSelected(null);
      setShow(false);
      setCorrect(-1);
      setCount(count + 1);
    }, 3000);
  };
  return (
    <>
      <div className='quiz'>
        <h2>{question}</h2>
        <div className='answer'>
          {hints.map((value, index) => {
            return (
              <div
                className={`answer-list ${selected === index && 'selected'} ${
                  show && correct === index && 'correct'
                }`}
                onClick={handleSelect(index)}
                key={index}>
                <p>
                  <span className='answer-list-tab'>{index + 1}.</span>
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        <div className='submit-quiz'>
          <button onClick={handleSubmit} disabled={selected === null}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
