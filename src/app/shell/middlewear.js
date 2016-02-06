import validator from '../util/validator';

export default store => next => action => {
  if (validator.isObject(action['meta']) && action['meta']['remote']) {
    console.log('emote middleware called with action: ', action);
    //TODO crud router api interface
  }
  return next(action);
}

//TODO add logging middlewear
//TODO add abstract validation middlwear
