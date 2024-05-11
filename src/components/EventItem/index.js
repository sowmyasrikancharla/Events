// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  render() {
    const {eventDetails, selectEvent} = this.props
    const {imageUrl, id, location, name, registrationStatus} = eventDetails
    const onClickEvent = () => {
      selectEvent(id)
    }
    return (
      <li className="item-con">
        <button onClick={onClickEvent} className="but">
          <img src={imageUrl} className="image-set" alt="event" />
          <h2 className="head1">{name}</h2>
          <p className="head1">{location}</p>
        </button>
      </li>
    )
  }
}
export default EventItem
