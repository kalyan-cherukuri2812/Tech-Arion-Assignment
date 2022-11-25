import './index.css'

import {Component} from 'react'

export default class PostRequest extends Component {
  state = {email: '', message: '', name: ''}

  emailChange = event => {
    this.setState({email: event.target.value})
  }

  messageChange = event => {
    this.setState({message: event.target.value})
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  submit = async event => {
    event.preventDefault()
    const {email, message, name} = this.state
    const details = {email, message, name}

    const url = 'https://admin.srkprojects.com/web/api/client/v1/contact-us/'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }

    const postResponse = await fetch(url, options)
    const postResponseJsonData = await postResponse.json()
    console.log(postResponse)
    console.log(postResponseJsonData)
  }

  render() {
    const {email, message, name} = this.state
    console.log(email, message, name)
    return (
      <form onSubmit={this.submit} className="post-bg">
        <div className="input-div">
          <label htmlFor="email">Email : </label>
          <input
            value={email}
            onChange={this.emailChange}
            id="email"
            type="email"
          />
        </div>
        <div className="input-div">
          <label htmlFor="message">Message : </label>
          <input
            value={message}
            onChange={this.messageChange}
            id="message"
            type="text"
          />
        </div>
        <div className="input-div">
          <label htmlFor="name">Name : </label>
          <input
            value={name}
            onChange={this.nameChange}
            id="name"
            type="name"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    )
  }
}
