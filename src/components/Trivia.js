import React, { useState, useEffect } from 'react'

export default function Trivia(props) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState('answer')

    useEffect(() => {

        setQuestion(props.data[props.questionNumber - 1])

    }, [props.data, props.questionNumber])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName('answer active');
        delay(1000, () =>
            setClassName(a.correct ? 'answer correct' : 'answer wrong'));
        delay(3000, () =>{
        if (a.correct) {
            props.setQuestionNumber(prev => prev + 1);
            setSelectedAnswer(null);
        }
        else {
            props.setStop(true);
        }
        });

    }




    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map(a => (
                    <div className={selectedAnswer === a ? className : 'answer'} onClick={() => handleClick(a)}>
                        {a.text}</div>
                ))}
            </div>
        </div>
    )
}
