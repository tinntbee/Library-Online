import {combineReducers} from 'redux';
import bookStore from './bookStore';
import user from './user';

const rootReducer = combineReducers({
    user: user,
    bookStore: bookStore
})

export default rootReducer;