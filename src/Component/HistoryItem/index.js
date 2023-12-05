import './index.css'

const HistoryItem = props => {
  const {deleteHistory, historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="browser-start">
        <p className="history-time">{timeAccessed}</p>
        <div className="browser-middle">
          <img src={logoUrl} className="history-image" alt="domain logo" />
          <p className="history-title">{title}</p>
          <p className="history-url">{domainUrl}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          className="delete-button"
          data-testid="delete"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
