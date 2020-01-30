import axios from 'axios'
const initialState = {
  user: {},
  loading: false,
  errorMessage: ''
}

const LOGIN = "LOGIN"
const REGISTER = "REGISTER"
const LOGOUT = "LOGOUT"
const GET_USER = "GET_USER"

const PENDING = "_PENDING"
const FULFILLED = "_FULFILLED"
const REJECTED = "_REJECTED"

export function register(username, password){
  const user = axios.post('/auth/register', {username, password}).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: REGISTER,
    payload: user
  }
}

export function login(username, password){
  const user = axios.post('/auth/login', {username, password}).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: LOGIN,
    payload: user
  }
}

export function logout(){
  const logout = axios.get('/auth/logout').then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: LOGOUT,
    payload: logout
  }
}

export function getUser(){
  const user = axios.get('/auth/user').then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: GET_USER,
    payload: user
  }
}

export default function authReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case LOGIN + PENDING:
      return {...state, loading: true}
    case LOGIN + FULFILLED:
      return {...state, user: payload, loading: false}
    case LOGIN + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    case REGISTER + PENDING:
      return {...state, loading: true}
    case REGISTER + FULFILLED:
      return {...state, user: payload, loading: false}
    case REGISTER + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    case LOGOUT + PENDING:
      return {...state, loading: true}
    case LOGOUT + FULFILLED:
      return {...state, user: {}, loading: false}
    case LOGOUT + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    case GET_USER + PENDING:
      return {...state, loading: true}
    case GET_USER + FULFILLED:
      return {...state, user: payload, loading: false}
    case GET_USER + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    default:
      return state
  }
}