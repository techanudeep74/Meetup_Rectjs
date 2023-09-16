import {Component} from 'react'
import MeetupContext from '../../context/MeetupContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {name: '', topic: '', register: false, errorMsg: false}

  onChangeUserName = event => {
    this.setState({name: event.target.value, register: false})
  }

  onChangeUserTopic = event => {
    this.setState({topic: event.target.value})
  }

  onChangeErrorMsg = () => {
    const {name} = this.state
    if (name === '') {
      this.setState({errorMsg: true})
    }
  }

  render() {
    const {name, topic, register, errorMsg} = this.state
    const helloName = `Hello ${name}`
    const wellcomeTopic = `Welcome to ${topic}`
    return (
      <MeetupContext.Consumer>
        {value => {
          const {changeUserData} = value

          const onsubmitForm = event => {
            event.preventDefault()
            changeUserData(helloName, wellcomeTopic, register)
            const {history} = this.props
            if (name !== '') {
              history.replace('/')
            }
          }

          return (
            <div className="register-background">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <div className="register-form-background">
                <img
                  className="website-register-image"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />

                <form className="form-background" onSubmit={onsubmitForm}>
                  <h1 className="register-heading">Let us join</h1>
                  <label className="label" htmlFor="text">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={this.onChangeUserName}
                    className="input"
                    id="text"
                    type="text"
                    placeholder="Your name"
                  />
                  <label className="label" htmlFor="dropdown">
                    TOPICS
                  </label>
                  <select
                    value={topic}
                    id="dropdown"
                    className="select"
                    onChange={this.onChangeUserTopic}
                  >
                    {topicsList.map(eachItem => (
                      <option key={eachItem.id} selected value={eachItem.id}>
                        {eachItem.displayText}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={this.onChangeErrorMsg}
                    className="register-now-button"
                    type="submit"
                  >
                    Register Now
                  </button>
                  {errorMsg && (
                    <p className="errorMsg">Please enter your name</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}
export default Register
