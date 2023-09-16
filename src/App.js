import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'

import './App.css'

class App extends Component {
  state = {
    name: 'Welcome to Meetup',
    topic: 'Please register for the topic',
    register: true,
  }

  changeUserData = (name, topic, register) => {
    this.setState({name, topic, register})
  }

  render() {
    const {name, topic, register} = this.state
    return (
      <MeetupContext.Provider
        value={{name, topic, register, changeUserData: this.changeUserData}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
