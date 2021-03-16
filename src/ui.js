import React, { useState } from 'react';
import {questions} from "./new1";

const getQuestions = (header, questions, setInput, input) => {
  return (
    <div>
      <p>{header}</p>
      {questions.map(question => {
        const Element = question.type;
        if (question.type === 'input') {
          return <input placeholder={`between ${question.min} and ${question.max}`} />
        }
        if (question.type === 'select') {
          console.log(question)
          return (
            question.showfor === 'all' &&
            (
              <select>
                <option value="" selected>Choose</option>
                {question.selectors.map(selector => (
                    <option onClick={e => setInput(e.target.value)}>{selector}</option>
                ))}
              </select>
            )
          )
        }
        return (
          <Element placeholder={question.id} />
        )
      })}
    </div>
    

  )
}

const Ui = () => {
  const [input, setInput] = useState('');
  const [isPregnant, setPregnant] = useState('');
  const headers = ['basics']
  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input)
  }
  return (
    <div>
      {questions.map((q, i) => {
        return (
        <div>
          <p>{headers[i]}</p>
          {q.map(question => {
            // const Element = question.type;
            if (question.type === 'input') {
              return <input placeholder={`between ${question.min} and ${question.max}`} />
            }
            if (question.type === 'select') {
              console.log({input}, 'input')
              return (
                question.showfor === 'all' ? (
                  <select onChange={handleChange}>
                    <option value="" selected>Choose</option>
                    {question.selectors.map(selector => (
                        <option>{selector}</option>
                    ))}
                  </select>
                ) : question.showfor === input ? (
                  <select onChange={e => setPregnant(e.target.value === 'No' && 'pregnant')}>
                    <option value="" selected>Choose</option>
                    {question.selectors.map(selector => {
                      console.log(input);
                      return <option>{selector}</option>
                    })}
                  </select>
                ) : question.showfor === isPregnant && (
                  <select>
                    <option value="" selected>Choose</option>
                    {question.selectors.map(selector => {
                      console.log(input);
                      return <option>{selector}</option>
                    })}
                  </select>
                )
              )}
            return (
              // <Element placeholder={question.id} />
              <p>hello</p>
            )
          })}
        </div>
        )
      })}
    </div>
  )
}

export default Ui;
