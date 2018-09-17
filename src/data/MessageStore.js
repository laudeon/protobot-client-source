import Counter from './Counter'
import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import Message from './Message'
import MessageActionTypes from './MessageActionTypes'
import AppDispatcher from './AppDispatcher'

class MessageStore extends ReduceStore {
  constructor () {
    super(AppDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case MessageActionTypes.ADD_MESSAGE:
        // Don't add message with no text.
        if (!action.message.text) {
          return state
        }
        const id = Counter.increment()
        return state.set(id, new Message({
          id,
          text: action.message.text,
          user: action.message.user,
          datetime: new Date(action.message.datetime)
        }))

      default:
        return state
    }
  }
}

export default new MessageStore()
