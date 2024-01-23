// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchSuggestions = event => {
    this.setState({searchInput: event.target.value})
  }

  selectedInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionList.filter(eachItem =>
      eachItem.suggestion.toLowercase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <img
          className="google-logo"
          alt="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="search-container">
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="search-icon"
              alt="search icon"
            />
            <h1>Hello</h1>
            <input
              className="search-input"
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onSearchSuggestions}
            />
          </div>
          <ul className="suggestion-item-container">
            {searchResult.map(eachItem => (
              <SuggestionItem
                suggestionItem={eachItem}
                key={eachItem.id}
                selectedInput={this.onSelect}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
