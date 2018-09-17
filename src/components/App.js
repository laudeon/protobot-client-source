import React, { Component } from 'react'
import Debug from 'debug'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import MessageForm from './MessageForm'
import Conversation from './Conversation'
import './App.css'

const debug = Debug('protobot:App')

class App extends Component {
  static get propTypes () {
    return {
      messages: PropTypes.object.isRequired,
      addMessage: PropTypes.func.isRequired,
      socket: PropTypes.object.isRequired
    }
  }

  componentDidMount () {
    this.props.socket.on('connect', () => debug('new ws connection'))
    this.props.socket.on('response', this.props.addMessage)
    this.props.socket.on('disconnect', () => debug('ws disconnected'))
  }

  render () {
    return (
      <section className='App'>
        <Sidebar />
        <Conversation
          {...this.props} />
        <MessageForm
          {...this.props} />
      </section>
    )
  }
}

export default App
