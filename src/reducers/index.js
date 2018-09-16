import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReduser from './reduser-active-user';

const rootReducer = combineReducers({
  users: UserReducer,
  activeUser:ActiveUserReduser
});
export default rootReducer;
