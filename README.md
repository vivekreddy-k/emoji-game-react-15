## LIVE DEMO :-  <a href="https://relaxed-bohr-7f8e65.netlify.app/">Emoji Game</a>
In this assignment let's build a **Emoji Game** 

### Refer to image below:

refer link to understand application -- https://assets.ccbp.in/frontend/content/react-js/emoji-game-output.gif --
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-output.gif" alt="emoji-game-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px) - output](https://assets.ccbp.in/frontend/content/react-js/emoji-game-sm-output.png)
- [Extra Small (Size < 576px), Small (Size >= 576px) - won game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-won-game-sm-output.png)
- [Extra Small (Size < 576px), Small (Size >= 576px) - lose game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lose-game-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - output](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - won game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-won-game-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - lose game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lose-game-lg-output.png)

## Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- The _Score_ and _Total score_ for the current game should be **0** initially.
- When an **Emoji** is clicked

  - If the clicked emoji is not the same as any of the previously clicked emojis then the _Score_ should be increased by **1**.
  - If all the emojis are clicked exactly once

    - The _Game status_ along with _Best score_ and _Play Again_ button should be displayed as shown in the **design file (game own)**.
    - The **Best score** should be equal to the **Top Score**.

  - If the clicked emoji is the same as any of the previously clicked emojis

    - The _Game status_ along with _Current score_ and _Play Again_ button should be displayed as shown in the **design file (game lose)**.

    - If the score achieved in the current game is higher than the previous scores then the **Top Score** should be updated accordingly.

- When the **Play Again** button is clicked then, we should be able to play the game again.

- The _Play Again_ button should reset the game and score but not the _Top score value_.

- The list of emojis is passed to the `EmojiGame` component as a prop `emojisList` in the form of an array object.

- Each emoji object will have the following properties

  | Key       | Data Type |
  | --------- | --------- |
  | id        | Number    |
  | emojiName | String    |
  | emojiUrl  | String    |

- The value of the key `id` in the emoji object should be used as a key to the `EmojiCard` component.
- The value of the key `emojiName` in the emoji object should be used as a alt text to the `emoji` image.

- Your task is to complete the implementation of
  - `src/components/EmojiGame/index.js`
  - `src/components/EmojiGame/index.css`
  - `src/components/NavBar/index.js`
  - `src/components/NavBar/index.css`
  - `src/components/EmojiCard/index.js`
  - `src/components/EmojiCard/index.css`
  - `src/components/WinOrLoseCard/index.js`
  - `src/components/WinOrLoseCard/index.css`

### Quick Tips

- The cursor CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element. Use the CSS property cursor with a value `pointer` to indicate a link. Click <a href="https://css-tricks.com/almanac/properties/c/cursor/" target="_blank">this</a> to know more.

- An outline is a line that is drawn around an element, outside the border. The outline CSS shorthand property sets all the outline properties. Use the CSS property `outline` with value `none` to hide all the outline properties. Click <a href="https://www.w3schools.com/css/css_outline.asp" target="_blank">this</a> to know more.

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/game-logo-img.png](https://assets.ccbp.in/frontend/react-js/game-logo-img.png)
- [https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png](https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png)
-  [https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png](https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png)
- [https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png](https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png)
- [https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png](https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png)
- [https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png](https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png)
- [https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png](https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png)
- [https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png](https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png)
- [https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png](https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png)
- [https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png](https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png)
- [https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png](https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png)
- [https://assets.ccbp.in/frontend/react-js/grinning-face-img.png](https://assets.ccbp.in/frontend/react-js/grinning-face-img.png)
- [https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png](https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png)
- [https://assets.ccbp.in/frontend/react-js/won-game-img.png](https://assets.ccbp.in/frontend/react-js/won-game-img.png)
- [https://assets.ccbp.in/frontend/react-js/lose-game-img.png](https://assets.ccbp.in/frontend/react-js/lose-game-img.png)

#### Colors

<div style="background-color: #6a59ff ; width: 150px; padding: 10px; color: white">Hex: #6a59ff</div>
<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #3d3d3d ; width: 150px; padding: 10px; color: white">Hex: #3d3d3d</div>

#### Background Colors

<div style="background-color: #9796f0 ; width: 150px; padding: 10px; color: white">Hex: #9796f0</div>
<div style="background-color: #fbc7d4 ; width: 150px; padding: 10px; color: black">Hex: #fbc7d4</div>
<div style="background-color: #ffffff33 ; width: 150px; padding: 10px; color: black">Hex: #ffffff33</div>
<div style="background-color: #ffce27 ; width: 150px; padding: 10px; color: black">Hex: #ffce27</div>

#### Border Colors

<div style="background-color: #ffffff30 ; width: 150px; padding: 10px; color: black">Hex: #ffffff30</div>

#### Font-families

- Roboto

###The application is completly responsive (responsive-web-design)

![iphone](https://user-images.githubusercontent.com/46521639/116983020-344fcd00-ace7-11eb-9fe2-3d5b8cc070f0.PNG)
![responsive 1200](https://user-images.githubusercontent.com/46521639/116983030-36b22700-ace7-11eb-914a-0d8edbe3d786.PNG)
![i pad](https://user-images.githubusercontent.com/46521639/116983034-387bea80-ace7-11eb-8705-e4f66e925bc3.PNG)

