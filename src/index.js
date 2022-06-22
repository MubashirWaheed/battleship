import Player from './Factories/player'
import { renderBoards, renderButton } from './views/dom';

import './css/index.css'
const game = ()=>{
    const p1 = Player();
    const bot = Player();
    // ships should be automactically placed for bot
    // I have ot add these ship to the bot baord 
    bot.randomFleet()
    console.log('bot board',bot.board.board)
    renderBoards(p1, bot)
    renderButton(p1)
}

game()