import MessageActionTypes from './MessageActionTypes'
import AppDispatcher from './AppDispatcher'

const Actions = {
  addMessage (message) {
    AppDispatcher.dispatch({
      type: MessageActionTypes.ADD_MESSAGE,
      message
    })
  }
}

export default Actions
