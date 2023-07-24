import {Link} from 'react-router-dom'
import Context from '../../context/context'
import './index.css'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <Context.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <div className="bgContainer1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              className="logo"
              alt="website logo"
            />
            {isRegistered === true ? (
              <div className="successView">
                <h1 className="name1">Hello {name}</h1>
                <p className="topic">Welcome to {topic}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetupImage"
                />
              </div>
            ) : (
              <div className="successView">
                <h1 className="name1">Welcome to Meetup</h1>
                <p className="topic">Please register for the topic</p>
                <Link to="/register">
                  <button className="button" type="button" onClick={onRegister}>
                    Register
                  </button>
                </Link>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetupImage"
                />
              </div>
            )}
          </div>
        )
      }}
    </Context.Consumer>
  )
}

export default Home
