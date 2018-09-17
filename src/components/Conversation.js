import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './List'
import './Conversation.css'

class Conversation extends Component {
  static get propTypes () {
    return {
      messages: PropTypes.object.isRequired
    }
  }

  _messageTime (elem) {
    return (
      <span className='datetime'>{elem.datetime.toUTCString()}</span>
    )
  }

  render () {
    return (
      <section className='Conversation'>
        <List
          beforeElem={this._messageTime}
          listClassName='protobotConversation'
          elements={this.props.messages} />
      </section>
    )
  }
}

export default Conversation
