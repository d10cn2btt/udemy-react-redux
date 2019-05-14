import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import PostReducer from './reducer_posts';

export default combineReducers({
  post: PostReducer,
  form: formReducer
});
