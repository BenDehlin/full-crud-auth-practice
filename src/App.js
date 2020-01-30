import React, {Component} from 'react';
import './App.css';
import routes from './routes'
import Header from './Components/Header'
import {connect} from 'react-redux'
import {getUser} from './redux/authReducer'

class App extends Component {
  componentDidMount(){
    this.props.getUser()
  }

  render(){
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUser
}

export default connect(null, mapDispatchToProps)(App)
