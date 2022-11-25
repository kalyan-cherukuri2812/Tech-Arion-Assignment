import './index.css'

import {Component} from 'react'

export default class GetRequest extends Component {
  state = {getData: []}

  componentDidMount = async () => {
    const response = await fetch('https://gorest.co.in/public/v1/todos')
    const responseData = await response.json()
    console.log(responseData.data)
    const data = responseData.data.map(each => ({
      dueOn: each.due_on,
      id: each.id,
      status: each.status,
      title: each.title,
      userId: each.user_id,
    }))
    this.setState({getData: data})
  }

  render() {
    const {getData} = this.state
    console.log(getData)
    return (
      <div className="getreq-bg">
        <ul>
          {getData.slice(0, 9).map(each => (
            <li key={each.id}>
              <h1 className="data-h">Id:{each.id}</h1>
              <h1 className="data-h">Due On:{each.dueOn}</h1>
              <h1 className="data-h">Status:{each.status}</h1>
              <h1 className="data-h">Title:{each.title}</h1>
              <h1 className="data-h">User Id:{each.userId}</h1>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
