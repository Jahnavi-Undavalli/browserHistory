import './index.css'

const SearchItem = props => {
  const {suggestionDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = suggestionDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <p className="timer">{timeAccessed}</p>
      <img src={logoUrl} className="img" alt="app logo" />
      <p className="paragraph">{title}</p>
      <p className="paragraph">{domainUrl}</p>
      <button className="delete" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchItem
