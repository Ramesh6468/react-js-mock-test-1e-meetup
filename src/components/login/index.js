import Context from '../../context/context'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Login = props => (
  <Context.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      console.log(showError)
      console.log(topic)

      const onSubmitForm = () => {
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      return (
        <div className="bgContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            className="logo"
            alt="website logo"
          />
          <div className="subsection">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="image1"
            />
            <div className="registerCard">
              <h1 className="title">Let Us Join</h1>
              <form className="formCard">
                <div className="inputCard1">
                  <label htmlFor="input1" className="label1">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input1"
                    id="input1"
                    onChange={onChangeName}
                    value={name}
                  />
                </div>
                <div className="inputCard1">
                  <label htmlFor="input2" className="label1">
                    TOPICS
                  </label>
                  <select
                    className="input1"
                    id="input2"
                    onChange={onChangeTopic}
                    value={topic}
                  >
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="button" type="submit" onClick={onSubmitForm}>
                  Register Now
                </button>
                {showError ? (
                  <p className="error">Please enter your name</p>
                ) : (
                  ''
                )}
              </form>
            </div>
          </div>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Login
