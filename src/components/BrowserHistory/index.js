import {Component} from 'react'

import SearchItem from '../SearchItem'

import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteHistory = id => {
    const {initialHistoryList} = this.props
    const filteredHistoryData = initialHistoryList.filter(
      each => each.id !== id,
    )
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      initialHistoryList: filteredHistoryData,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    // eslint-disable-next-line no-unused-vars
    const searchResults = initialHistoryList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="upper-container">
          <h1 className="heading">History</h1>
          <img
            alt="search"
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/search-img.png "
          />
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>

        <div className="lower-container">
          <ul className="suggestions-list">
            {searchResults.map(eachHistory => (
              <SearchItem
                key={eachHistory.id}
                deleteHistory={this.deleteHistory}
                historyDetails={eachHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
