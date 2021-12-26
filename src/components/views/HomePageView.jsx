import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import './HomePageView.css'

function HomeView() {
  const score = useSelector((state) => state.user.score)
  const questionsSea = useSelector((state) => state.questions.Sea);
  const questionsMovie = useSelector((state) => state.questions.Movie);
  const questionsChess = useSelector((state) => state.questions.Chess);
  const questionsLiterature = useSelector((state) => state.questions.Literature);
  const questionsJapan = useSelector((state) => state.questions.Japan);



  return (
    <div className='background'>
      <h1>Своя Игра</h1>
      <p className="score">Очки: {score}</p>
      <div className='mainTable'>
        <table>
          {
            questionsSea.length
              ? (
                <>

                  <tr>
                    <td className='category'>{`${questionsSea[0].category}`}</td>
                    {
                      questionsSea.map(

                        (item) => {
                          return (item.view)
                            ? <Link className="link" key={item.id} to={`/Sea/${item.id}`}><td >{item.cost}</td></Link>
                            : <Link className="link display-none" disabled key={item.id} to={`/Sea/${item.id}`}><td >{item.cost}</td></Link>
                        },
                      )
                    }
                  </tr>

                  <tr>
                    <td className='category'>{`${questionsMovie[0].category}`}</td>
                    {

                      questionsMovie.map(
                        (item) => {
                          return (item.view)
                            ? <Link className="link" key={item.id} to={`/Movie/${item.id}`}><td >{item.cost}</td></Link>
                            : <Link className="link display-none" disabled key={item.id} to={`/Movie/${item.id}`}><td >{item.cost}</td></Link>
                        }
                      )
                    }
                  </tr>

                  <tr>
                    <td className='category'>{`${questionsChess[0].category}`}</td>
                    {

                      questionsChess.map(
                        (item) => {
                          return (item.view)
                            ? <Link className="link" key={item.id} to={`/Chess/${item.id}`}><td >{item.cost}</td></Link>
                            : <Link className="link display-none" disabled key={item.id} to={`/Chess/${item.id}`}><td >{item.cost}</td></Link>
                        }
                      )
                    }
                  </tr>

                  <tr>
                    <td className='category'>{`${questionsLiterature[0].category}`}</td>
                    {

                      questionsLiterature.map(
                      
                        (item) => {
                          return (item.view)
                            ? <Link className="link" key={item.id} to={`/Literature/${item.id}`}><td >{item.cost}</td></Link>
                            : <Link className="link display-none" disabled key={item.id} to={`/Literature/${item.id}`}><td >{item.cost}</td></Link>
                        }
                      )
                    }
                  </tr>

                  <tr>
                    <td className='category'>{`${questionsJapan[0].category}`}</td>
                    {

                      questionsJapan.map(

                        (item) => {
                          return (item.view)
                            ? <Link className="link" key={item.id} to={`/Japan/${item.id}`}><td >{item.cost}</td></Link>
                            : <Link className="link display-none" disabled key={item.id} to={`/Japan/${item.id}`}><td >{item.cost}</td></Link>
                        }
                      )
                    }
                  </tr>

                </>
              )
              : <p>Список задач пуст</p>
          }
        </table>
      </div>
    </div>
  );
}

export default HomeView;
