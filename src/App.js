import './App.css';
import { useState, useEffect } from 'react';
import Trivia from './components/Trivia';
import Time from './components/Time';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earnned, setEarnned] = useState("$ 0");


  const data = [
    {
      id: 1,
      question: "what's the capital of India?",
      answers: [
        {
          text: 'Ahmedabad',
          correct: false
        },
        {
          text: 'Mumbai',
          correct: false
        },
        {
          text: 'Dehli',
          correct: true
        },
        {
          text: 'Kolkata',
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: "What's the captital of Gujarat?",
      answers: [
        {
          text: 'Ahmedabad',
          correct: false
        },
        {
          text: 'Gandhinagar',
          correct: true
        },
        {
          text: 'Surat',
          correct: false
        },
        {
          text: 'Vadodara',
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: "Who have score most goal in UCL?",
      answers: [
        {
          text: 'Cristiano Ronaldo',
          correct: true
        },
        {
          text: 'Lioneal Messi ',
          correct: false
        },
        {
          text: 'Neymar Jr',
          correct: false
        },
        {
          text: 'Robert Lewandowaski',
          correct: false
        }
      ]
    }
  ]


  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 400" },
    { id: 4, amount: "$ 800" },
    { id: 5, amount: "$ 1600" },
    { id: 6, amount: "$ 3200" },
    { id: 7, amount: "$ 6400" },
    { id: 8, amount: "$ 12800" },
    { id: 9, amount: "$ 25600" },
    { id: 10, amount: "$ 45600" },
    { id: 11, amount: "$ 70000" },
    { id: 12, amount: "$ 100000" },
  ].reverse();

  useEffect(() => {
    questionNumber >1 && setEarnned(moneyPyramid.find(m=>m.id === questionNumber -1).amount) 
  }, [moneyPyramid,questionNumber])
  

  return (
    <>
      <div className="app">
        <div className="main">
          {stop ? <h1 className='endText'>You Earned : {earnned}</h1> : (
            <>
              <div className="top">
                <div className="timer"><Time setStop={setStop} questionNumber={questionNumber}/></div>
              </div>
              <div className="bottom"><Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} /></div>
            </>
          )}

        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>

  );
}

export default App;
