import {createStore, applyMiddleware, combineReducers} from 'redux'
import authReducer from './authReducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
  authReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))