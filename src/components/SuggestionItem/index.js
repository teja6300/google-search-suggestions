// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, selectedInput} = props
  const {suggestion} = suggestionItem

  const onSelectedInput = () => {
    selectedInput(suggestion)
  }

  return (
    <li className="list-container" onClick={onSelectedInput}>
      <p className="suggestion">{suggestion}</p>
      <img
        className="arrow-image"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
