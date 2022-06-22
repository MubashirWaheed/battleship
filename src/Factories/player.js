import Ship from "./ship"
import Gameboard from "./gameboard"

const Player = ()=>{
    const board = Gameboard()

    const randomShip = (length)=>{
        const rowPos = Math.floor(Math.random() * 10);
        const cell = Math.floor(Math.random() * 10);
        // const direction = Math.round(Math.random());
        const direction = 0
        return board.placeShip(rowPos,cell,length,direction);
    }
    
    const randomFleet = ()=>{
        // two ships of length 1 
        for(let i =0; i < 2; ){
            if(randomShip(1) == false) continue
            i++
        } 
        // two ships of length 2 
        for(let i =0; i < 2; ){
            if(randomShip(2) == false) continue
            i++
        }
        // two ship of length 3
        for(let i =0; i < 2; ){
            if(randomShip(3) == false) continue
            i++
        }
        // two ships of length 4
        for(let i =0; i < 2; ){
            if(randomShip(4) == false) continue
            i++
        }
    }

    return{
        randomFleet,
        board
    }
}

export default Player