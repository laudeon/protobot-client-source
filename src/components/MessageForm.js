import React, { Component } from 'react'
import Debug from 'debug'
import PropTypes from 'prop-types'
import './MessageForm.css'

const debug = Debug('protobot:MessageForm')
const ENTER_KEY = 'Enter'

class MessageForm extends Component {
  constructor (props) {
    super(props)

    this.textareaElem = null
    this.conversationElem = null
    this.talk = this.talk.bind(this)
    this.scrollDown = this.scrollDown.bind(this)
  }

  static get propTypes () {
    return {
      socket: PropTypes.object.isRequired,
      messages: PropTypes.object.isRequired,
      addMessage: PropTypes.func.isRequired
    }
  }

  componentDidMount () {
    this.conversationElem = document.querySelector('section.Conversation')
    this.textareaElem = document.querySelector('form.BotForm textarea')
    this.props.socket.on('response', this.scrollDown)
    this._initForm()
  }

  _sendMessage (message) {
    debug('send user message:', 'websocket "message" event')

    this.props.addMessage(message)
    this.props.socket.emit('message', message)
    this.scrollDown()
  }

  _initForm () {
    this.textareaElem.value = null
    this.textareaElem.focus()
  }

  talk (e) {
    if (e.key === ENTER_KEY) {
      const message = {
        text: this.textareaElem.value,
        user: this.props.socket.id,
        datetime: new Date()
      }
      debug('key enter pressed, sending the message...', message)
      this._sendMessage(message)
      this._initForm()
    }
  }

  scrollDown () {
    setTimeout(() => {
      this.conversationElem.scrollTo(0, (this.conversationElem.scrollHeight + 500))
      debug(this.conversationElem.clientHeight)
    }, 100)
  }

  render () {
    return (
      <form className='BotForm'>
        <textarea
          onKeyUp={this.talk}
          placeholder='Write your message here... (press enter to send it)' />
      </form>
    )
  }
}

export default MessageForm
