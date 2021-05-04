/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  /* state has 3 properties which specify top score, array of clicked emojis details and also 
    whether gave is over or not if same emoji is clicked/ not clicked respectively */
  state = {
    clickedEmojis: [],
    isGameEnd: false,
    topScore: 0,
  }

  /* a method that shuffles the emojis order randomly  */
  /* this method gets called each time a emoji is clicked since state gets
   updates each time a emoji is clicked. SO after every click emojis get shuffled randomly */
  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  /* a method for actions to happen when a emoji is clicked  */
  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmojis: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  /* a render application to display score once we win/lose the game  */
  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = emojisList.length === clickedEmojis.length
    /* we will be sending current score since it is to be displayed one score card is displayed */
    /* for onClick of play Again button "onClickPlayAgain" is passed so onv=ce the button is clicked 
    the game gets restated again keeping top score undisturbed  */
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmojis.length}
      />
    )
  }

  /* render emojis list method gets emojis shuffled list and display 
  each Emoji by sending data to EmojiCard */
  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojisList()
    return (
      <ul className="emoji-list">
        {/* each item should have a key. we use onClickEmoji method to get the id of clicked emoji from 
        Emoji Card files */}
        {shuffledEmojiList.map(emojiItem => (
          <EmojiCard
            key={emojiItem.id}
            emoji={emojiItem}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  /* main render method of EmojiGame application  */
  render() {
    const {isGameEnd, clickedEmojis, topScore} = this.state
    const currentScore = clickedEmojis.length
    return (
      <div className="app-container">
        {/* current score, top score and gameEnd status is passed to navbar */}
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
        {/* if game is ended display whether wim/lose status or pif not play the game  */}
        <div className="emoji-body-container">
          {isGameEnd ? this.renderWinOrLose() : this.renderEmojiList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
