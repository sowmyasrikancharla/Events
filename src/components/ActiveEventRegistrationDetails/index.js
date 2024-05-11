// Write your code here
import {Component} from 'react'
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  render() {
    const {activeEventDetails} = this.props

    const noActiveEvent = () => (
      <div className="no-active-event-con">
        <p className="text-description">
          Click on an event, to view its registration details
        </p>
      </div>
    )

    const renderYetToRegisterEvent = () => (
      <div className="yet-to-register-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="event-image-set"
        />
        <p className="text-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can make you often fall totally in love with this
          beautiful art form
        </p>
        <button className="register-button">Register Here</button>
      </div>
    )

    const renderRegisteredEvent = () => (
      <div className="registered-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-logo"
        />
        <h2 className="text-description">
          You have already registered for the event
        </h2>
      </div>
    )

    const renderRegistrationsClosedEvent = () => (
      <div className="closed-registrations-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="closed-image-set"
        />
        <p className="closed-text">Registrations Are Closed Now!</p>
        <p className="text-description">Stay tuned. We will reopen</p>
      </div>
    )

    const activeEventRender = () => {
      switch (activeEventDetails) {
        case registrationStatus.yetToRegister:
          return renderYetToRegisterEvent()
        case registrationStatus.registered:
          return renderRegisteredEvent()
        case registrationStatus.registrationsClosed:
          return renderRegistrationsClosedEvent()
        default:
          return noActiveEvent()
      }
    }

    return (
      <div className="active-event-con">
        <h1>{activeEventRender()}</h1>
      </div>
    )
  }
}

export default ActiveEventRegistrationDetails
