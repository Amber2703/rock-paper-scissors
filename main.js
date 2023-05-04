import './media.css'
import playGames from "./helpers.js";
import rockImage from "./images/rock.png"
import paperImage from "./images/paper.png"
import scissorsImage from "./images/scissors.png"

document.querySelector('#app').innerHTML = `

<h1>Rock Paper Scissors Game</h1>
<p>pick one</p>

<ul>
  <li class="pick-one">
    <button id="rock">
      <img src=${rockImage} alt="Rock" >
      rock
    </button>
  </li>
  <li class="pick-one">
    <button id="paper">
      <img src=".${paperImage}" alt="Paper" >
      paper
    </button>
  </li>
  <li class="pick-one">
    <button id="scissors">
      <img src="${scissorsImage}" alt="Scissors" >
      scissors
    </button>
  </li>
</ul>
<p id="result"></p>
<p id="scores">
  Your score: <span id="user-score">0</span>
  Computer score: <span id="computer-score">0</span>
</p>

`
playGames();

