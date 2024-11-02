// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstnameHidden: true,
    isLastnameHidden: true,
  }

  showHideFirstname = () => {
    this.setState(prevState => ({
      isFirstnameHidden: !prevState.isFirstnameHidden,
    }))
  }

  showHideLastname = () => {
    this.setState(prevState => ({
      isLastnameHidden: !prevState.isLastnameHidden,
    }))
  }

  render() {
    const {isFirstnameHidden, isLastnameHidden} = this.state

    return (
      <div className="bg-container">
        <div className="show-hide-app-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="show-hide-container">
            <div className="show-hide-item">
              <button onClick={this.showHideFirstname} className="button">
                Show/Hide Firstname
              </button>
              {!isFirstnameHidden && <p className="name">Joe</p>}
            </div>
            <div className="show-hide-item">
              <button onClick={this.showHideLastname} className="button">
                Show/Hide Lastname
              </button>
              {!isLastnameHidden && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
