import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    bgContainer: 'bg-light-mode',
    container: 'dark-container',
    descriptionText: 'light-description',
    buttonText: 'Light Mode',
  }

  ChangeMode = () => {
    this.setState(prevState => ({
      bgContainer:
        prevState.bgContainer === 'bg-light-mode'
          ? 'bg-dark-mode'
          : 'bg-light-mode',
      container:
        prevState.container === 'dark-container'
          ? 'light-container'
          : 'dark-container',
      descriptionText:
        prevState.descriptionText === 'light-description'
          ? 'dark-description'
          : 'light-description',
      buttonText:
        prevState.buttonText === 'Light Mode' ? 'Dark Mode' : 'Light Mode',
    }))
  }

  render() {
    const {bgContainer, container, descriptionText, buttonText} = this.state

    return (
      <div className={` ${bgContainer} bg-container`}>
        <div className={`${container} container`}>
          <h1 className={`${descriptionText} description`}>
            Click To Change Mode
          </h1>
          <div className="button-container">
            <button type="button" className="button" onClick={this.ChangeMode}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
