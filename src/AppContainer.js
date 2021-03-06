import React, {Component} from 'react'
import {Container} from 'flux/utils'
import socketio from 'socket.io-client'
import App from './components/App'
import MessageStore from './data/MessageStore'
import MessageActions from './data/MessageActions'

const WS_URL = process.env.NODE_ENV === 'production' ? 'https://protobot-api.herokuapp.com' : 'http://localhost:4000'

class AppContainer extends Component {
  constructor () {
    super()
    this.socket = socketio(process.env.WS_URL || WS_URL)
  }

  static getStores () {
    return [
      MessageStore
    ]
  }

  static calculateState (prevState) {
    return {
      messages: MessageStore.getState(),
      addMessage: MessageActions.addMessage,
      removeLastMessage: MessageActions.removeLastMessage
    }
  }

  render () {
    return (<App
      socket={this.socket}
      {...AppContainer.calculateState()}
    />)
  }
}

export default Container.create(AppContainer)
