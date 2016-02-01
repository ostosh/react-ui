const initialTimeState = {}
export function time(state = initialTimeState, action) {
  console.log('time reducer called with state ', state , ' and action ', action);

  switch (action.type) {
    case 'GET_TIME_REQUEST':
      return {
      };
    case 'GET_TIME_SUCCESS':
      return {
      };
    case 'GET_TIME_FAILURE':
      return {
      };
    default:
      return state;
  }
}
