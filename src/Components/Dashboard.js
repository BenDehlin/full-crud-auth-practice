import React from 'react'
import {connect} from 'react-redux'

function Dashboard(props){
  const {user, history} = props
  const {push} = history
  return(
    <div>
      <h1>Dashboard</h1>
      {user.username ? 
      <h2>Welcome {user.username}!</h2>
    :
    <p>
      <button
      onClick={() => {push('/login')}}
      >Login</button> 
      or 
      <button
      onClick={() => {push('/register')}}
      >Register</button>
    </p>
    }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return{
    user
  }
}

export default connect(mapStateToProps)(Dashboard)