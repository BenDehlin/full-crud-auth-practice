import React, {Component} from 'react'
import {connect} from 'react-redux'
import {register} from '../redux/authReducer'


//DEPRECATED
class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = ({name, value}) => this.setState({[name]: value})
  handleRegister = () => {
    const {username, password} = this.state
    const {push} = this.props.history
    this.props.register(username, password)
    this.setState({username: '', password: ''})
    push('/')
  }

  render(){
    const {username, password} = this.state
    return(
      <div>
        <h1>Register</h1>
        <input
        value={username}
        name='username'
        placeholder='enter username'
        onChange = {(e) => this.handleChange(e.target)}
        />
        <input 
        value={password}
        name='password'
        placeholder='enter password'
        onChange = {(e) => this.handleChange(e.target)}
        />
        <button
        onClick = {() => this.handleRegister()}
        >Register</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {errorMessage} = state.authReducer
  return {errorMessage}
}

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)