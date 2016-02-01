import validator from '../util/validator'

export default socket => store => next => action => {
  if (Object.isObject(action['meta']) && action['meta']['remote']) {
    console.log('emote middleware called with action: ', action);
    //TODO crud router api interface
  }
  return next(action);
}
