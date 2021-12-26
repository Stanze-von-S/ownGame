import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePageView from '../views/HomePageView.jsx';
import QuestionView from '../views/QuestionView.jsx';

import store from '../../redux/store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>

          <Switch>
            <Route path="/" exact component={HomePageView} />
            <Route path="/:category/:id" exact component={QuestionView} />
          </Switch>
          
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
