// Write your code here.

import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emoji, onClickEmoji} = this.props
    const {emojiName, emojiUrl, id} = emoji
    /* onClickEmojiItem sends clicked emoji id to EmojiGame main page  */
    const onclickEmojiItem = () => {
      onClickEmoji(id)
    }
    return (
      <li className="emoji-item" onClick={onclickEmojiItem}>
        <img key={id} src={emojiUrl} alt={emojiName} className="emoji-image" />
      </li>
    )
  }
}

export default EmojiCard
