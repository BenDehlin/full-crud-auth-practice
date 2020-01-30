import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/authReducer'
import {register} from '../redux/authReducer'

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      register: false
    }
  }
  componentDidMount(){
    const {pathname} = this.props.location
    const {push} = this.props.history
    const {user} = this.props
    if(user.username){
      push('/')
    }
    if(pathname === '/register'){
      this.setState({register: true})
    }
  }
  componentDidUpdate(prevProps){
    const {pathname} = this.props.location
    if(pathname !== prevProps.location.pathname && pathname === '/register'){
        this.setState({register: true})
    }else if(pathname !== prevProps.location.pathname && pathname === '/login'){
      this.setState({register: false})
    }
  }
  handleChange = ({name, value}) => this.setState({[name]: value})

  handleLogin = () => {
    const {username, password, register} = this.state
    const {push} = this.props.history
    if(register){
      this.props.register(username, password)
    }else{
      this.props.login(username, password)
    }
    this.setState({username: '', password: ''})
    push('/')
  }

  render(){
    const {username, password, register} = this.state
    return(
      <div>
        <h1>{register ? 'Register' : 'Login'}</h1>
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
          onClick = {() => this.handleLogin()}
        >{register ? 'Register' : 'Login'}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {user}
}

const mapDispatchToProps = {
  login,
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)