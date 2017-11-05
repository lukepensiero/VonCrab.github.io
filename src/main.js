import React from 'react'
import ReactDOM from 'react-dom'

import { NumberList } from './lists.js'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

function UserGreeting (props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting (props) {
  return <h1>Please sign up!</h1>
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

function LoginButton (props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton (props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

function Mailbox (props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread message{unreadMessages.length > 1 ? 's' : ''}
        </h2>
      }
    </div>
  )
}

class LoginControl extends React.Component {
  constructor (props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }

  handleLoginClick () {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick () {
    this.setState({isLoggedIn: false})
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn
    let button = null
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLogoutClick} />
    } else {
      button = <LogoutButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <Clock />
        {button}
      </div>
    )
  }
}

const numbers = [1, 2, 3, 4, 5]

ReactDOM.render(
  (
    <div>
      <LoginControl />
      <NumberList numbers={numbers} />
    </div>
  ),
  document.getElementById('app')
)
