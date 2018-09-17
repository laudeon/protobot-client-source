import React, { Component } from 'react'
import logo from './../assets/images/robot(3).svg'
import './Sidebar.css'

class Sidebar extends Component {
  render () {
    return (
      <aside className="Sidebar">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome on ProtoBot</h1>
          <p>ProtoBot is a chatbot dedicated to serve you as best as it can. Ask him the weather or just say hello!</p>
        </section>
      </aside>
    )
  }
}

export default Sidebar
