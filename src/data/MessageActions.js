import MessageActionTypes from './MessageActionTypes'
import AppDispatcher from './AppDispatcher'

const Actions = {
  addMessage (message) {
    AppDispatcher.dispatch({
      type: MessageActionTypes.ADD_MESSAGE,
      message
    })
  },

  removeLastMessage () {
    AppDispatcher.dispatch({
      type: MessageActionTypes.REMOVE_LAST_MESSAGE
    })
  }
}

export default Actions
