import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../redux/authReducer'

function Header(props){
  const {push} = props.history
  const {user, logout} = props
  return(
    <div>
      <button
      onClick={() => {push('/')}}
      >Dashboard</button>
      {user.username ?
      <div>
        <button
        onClick={() => {
          logout()
          push('/')}}
        >Logout</button> 
      </div> :
      <div>
        <button
        onClick={() => {push('/login')}}
        >Login</button>
        <button
        onClick={() => {push('/register')}}
        >Register</button>
      </div>    
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

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))