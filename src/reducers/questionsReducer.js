import questionsInitialState from './questionInitialState'

// eslint-disable-next-line default-param-last
function questionsReducer(state = questionsInitialState, action) {
  switch (action.type) {
    case 'DISABLE_BUTTON':
      const {categorySlug} = action.payload;
      const stateCopy = {
        ...state,
        [categorySlug]: [
          ...state[categorySlug]
        ],
      };

      const question = stateCopy[categorySlug].find((q) => q.id === action.payload.id)
      question.view = !question.view;

      return stateCopy;

    default:
      return state;
  }
}

export default questionsReducer;
