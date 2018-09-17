import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppContainer from './AppContainer'
import registerServiceWorker from './registerServiceWorker'

if (process.env.NODE_ENV !== 'production') {
  window.localStorage.debug = 'protobot:*'
}

ReactDOM.render(<AppContainer />, document.getElementById('root'))
registerServiceWorker()
