import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  questions: questionsReducer,
});

export default rootReducer;
