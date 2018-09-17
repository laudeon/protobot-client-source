import Immutable from 'immutable'

const Message = Immutable.Record({
  id: '',
  text: '',
  user: '',
  datetime: ''
})

export default Message
