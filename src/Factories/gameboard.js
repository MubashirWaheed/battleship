import Ship from './ship'

const Gameboard = ()=>{
    let board = []
    
    //  IIFE to create baord array
    const init = (()=>{
        for(let i =0; i < 10; i++){
            board[i] = [];
            for(let j =0; j < 10; j++){
                board[i].push(false);
            }
        }
    })();
   
    // I only have to have my placeShip func working.
    const placeShip = (rowPos, cell,length,direction)=>{        
        
        // Checks if ship already present at certain cell
        // I ship present placeship not called again 
        if(board[rowPos][cell]) return false

        //  Creating multiple instaces of ship with same name when required and storing in board arary 
        const ship = Ship(length);
        let shipPos = 0;
        //  How did check for overflow and in case of overflow how random ship called again 
        //  Horizontal ships being added to the board array 
        if(direction == 0){
           
            if(cell + ship.shipLength > 10) return false // horizontal overflow check
            
            for(let i = cell; i < cell + ship.shipLength; i++){
                // Add the ship in the board array based on the coordinates 
                board[rowPos].splice(i,1,{ship,shipPos});
                shipPos++
                // reserve cells around the ship
                if(rowPos !== 0){
                    board[rowPos-1].splice(i,1,"res");
                }
                if(rowPos !== 9){
                    board[rowPos+1].splice(i,1,"res");
                }
            }
            if(cell !== 0){
                let minusCell = cell -1
                board[rowPos].splice(minusCell,1,"res")
            }
            if(cell !==9){
                board[rowPos].splice(cell+ship.shipLength,1, "res")
            }
        }
        
        // vertical ships being added to board array 
        if(direction == 1){
            // vertical overflow check
            if(rowPos + ship.shipLength > 10) return false;
            
            for(let i = rowPos; i < rowPos + ship.shipLength; i++){
                board[i].splice(cell,1,{ship, shipPos});
                shipPos++
                if(cell-1 !== -1){
                    board[i].splice(cell-1,1,"res");
                }
                if(cell+1 !== 10){
                    board[i].splice(cell+1,1,"res");
                }
            }
            if(rowPos-1 !== -1){
                board[rowPos-1].splice(cell,1,"res")
            }
            if(rowPos+ship.shipLength !== 10){
                board[rowPos+ship.shipLength].splice(cell,1,"res")
            }
        }
    }

    // How will I identify the ship instance which were created inside the palceship?  
    // Two cordinates will be passed
    // Based on those coordinates check the board array  
    const receiveAttack = (row, col)=>{
        // check based on coordinates whether ship inside array hit or not
        // console.log(typeof board[0][2])
        if(typeof board[row][col] == "object"){
            board[row][col].ship.shipArray[board[row][col].shipPos] = "hit"
            return "hit"
        } 
        if(!board[row][col]){
            board[row].splice(col,1,"miss")
            return "miss"
        }

    }
    // how do I check if all ships sunk?
    // Maybe check each ship's array if their cell have been hit

    const allSunk = (board)=>{
        let notSunk = false;
        for(let i = 0; i < 10; i++){
            board[i].forEach((item)=>{
                if(!item) return 
                if(item.ship.isSunk() == false){
                    notSunk = true
                }
            })
        }
        return notSunk == true ?  false : true
    }

    return {
        board,
        placeShip,
        receiveAttack,
        allSunk
    }
}

export default Gameboard