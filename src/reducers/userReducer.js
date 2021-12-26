const userInitialState = {
  user: {},
  score: 0,
}

function userReducer(state = userInitialState, action) {

  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SUM_SCORE':
      return {
        ...state,
        score: state.score += action.payload.score,
      }

    case 'SUM_SCORE_D':
      return {
        ...state,
        score: state.score -= action.payload.score,
      }

    default:
      return state;
  }
}

export default userReducer;
