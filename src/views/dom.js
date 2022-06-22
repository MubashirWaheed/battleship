import {receiveAttack} from '../Factories/gameboard'

const renderBoards = (p1,bot)=>{
    // How do I render two board?
    // should I use loop?
    // How do I use this array to add ships in the html 
    // and check for hit or miss on every click 
    const main = document.getElementById("main");

    // creating player board
    const p1Board = document.createElement("div")
    p1Board.classList.add("p1-board");
    for(let i =0; i < 10; i++){
        const row = document.createElement("div");
        row.classList.add("p1-row")
        for(let x = 0; x < 10; x++){
            const cell = document.createElement("div");
            cell.classList.add("p1-cell");
            row.appendChild(cell);
        } 
        p1Board.appendChild(row);
    }
    main.appendChild(p1Board)
    
    // creating bot board  
    const botBoard = document.createElement("div")
    botBoard.classList.add("bot-board");

    for(let i =0; i < 10; i++){
        const row = document.createElement("div");
        row.classList.add("row")
        for(let x = 0; x < 10; x++){
            const cell = document.createElement("div");
            cell.classList.add("bot-cell");
            row.appendChild(cell);
        } 
        botBoard.appendChild(row);
    }
    main.appendChild(botBoard)

    // adding event listner on the bot cells 
    const botCells = document.querySelectorAll(".bot-cell");
    botCells.forEach((cell,index)=>{
        cell.addEventListener("click",()=>{
            let pos1, pos2; 
            if(index < 10){
                pos1 = 0;
                pos2 = index.toString().split('')[0]
                // Now that I have clicked cell coordinates  
                // Now pass thses coordinates to other function which changes the
            }else{
                pos1 = index.toString().split('')[0]
                pos2 = index.toString().split('')[1]
            }
            // passing clicked cells coordinates to the receive attack function
            const result = bot.board.receiveAttack(pos1,pos2);
            // updating ui based on the cell clicked by player
            renderAttack(pos1,pos2,result)

        })
    })
}

// update the UI according to the array 
const renderAttack = (pos1, pos2,result)=>{
    //  How do I select the cell depending
    if(result == "hit"){
    document.querySelector(".bot-board").children[pos1].children[pos2].classList.add("hit")
    }else{
    document.querySelector(".bot-board").children[pos1].children[pos2].classList.add("miss")
    }
}

const renderButton = (p1)=>{
    const placeShipBtn = document.createElement("Button")
    placeShipBtn.innerText = "Auto place ships"

    placeShipBtn.addEventListener("click",()=>{
        // Call auto place funtion here
        // ships added in the array 
        p1.randomFleet();
        // Update the player board with the ships 
        renderShips(p1);
        //  Remove eventListner after button is clicked
        
    })

    document.querySelector("body").appendChild(placeShipBtn)
}

const renderShips = (p1)=>{
    // check each place in the array and add class based on the ship presence 
    console.log('humand board',p1.board.board)
    p1.board.board.forEach((row, rowIndex)=>{
        row.forEach((cell, cellIndex)=>{
            // How do I add classes to the specific clasess 
            // returns if false present at array indexs
            // console.log('rendering board',p1.board.board[rowIndex][cellIndex])
            if(!cell || p1.board.board[rowIndex][cellIndex] == "res" ) return
            let ship;
        
            
            if(rowIndex == 0){
                ship = document.querySelectorAll(".p1-cell")[`${cellIndex}`]
            }else{
                ship = document.querySelectorAll(".p1-cell")[`${rowIndex}${cellIndex}`]
            }
            ship.classList.add("ship")
        })
    })
}

export { renderBoards, renderButton}