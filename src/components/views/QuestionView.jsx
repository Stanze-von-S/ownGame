import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function QuestionView(props) {
  const dispatch = useDispatch();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const category = props.match.params.category;
  const idQuest = Number(props.match.params.id)
  const quests = useSelector((state) => state.questions[category])

  const quest = quests.filter((item) => item.id === idQuest)
  const answer = quest[0].answer;

  const actionView = {
    type: 'DISABLE_BUTTON',
    payload: {
      id: quest[0].id,
      question: quest[0].question,
      answer: quest[0].answer,
      cost: quest[0].cost,
      category: quest[0].category,
      categorySlug: quest[0].categorySlug,
      view: false,
    }
  }
  const actionScore = {
    type: 'SUM_SCORE',
    payload: {
      score: Number(quest[0].cost),
    }
  }

  const actionScoreD = {
    type: 'SUM_SCORE_D',
    payload: {
      score: Number(quest[0].cost),
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.input.value)

    if ((event.target.input.value).toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true)
      dispatch(actionScore)
    } else {
      setIsCorrect(false)
      dispatch(actionScoreD)
    }

    setIsAnswered(true);
    dispatch(actionView);
  }

  return (
    <div style={{ width: "80%", margin: "auto"}}>
      <p style={{ textAlign: "center", color: '#29cd29' }}>
        {quest[0].question}
      </p>

      <form name='form' onSubmit={onSubmit}>
        <input style={{ color: 'rgb(255 113 28)', marginRight: "50px", border: "solid 5px green" }} name='input' type="text" />
        <button style={{ textAlign: "center", color: '#29cd29', border: "solid 5px orange" }} type='submit' disabled={isAnswered}>
          Ответ
        </button>
      </form>

      {
        isAnswered && (
          isCorrect
            ? <div className="div-biayte">
              <p style={{ textAlign: "center", color: '#29cd29' }}>Верно!</p>
              <Link to='/' className="link link-return">Вернуться к вопросам </Link>
            </div>
            : <div className="div-biayte">
              <p style={{ textAlign: "center", color: 'red' }}>Не правильно! Правильный ответ: {answer}</p>
              <Link to='/' className="link link-return">Вернуться к вопросам </Link>
            </div>


        )
      }

    </div>
  );
}

export default QuestionView;
