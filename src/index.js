import Ship from "./Factories/ship";
import Gameboard from "./Factories/gameboard";
// import createBoardUI from "./views/gameboard";
import './css/index.css'
import { dragEnter, dragLeave, drop, dragOver  } from "./helper/drag";

// Implementing drag and drop 
let shipIndex;
let position 
const ship = document.querySelector('.ship');
const main = document.getElementById('main')
const cells = document.querySelectorAll('.cell');

ship.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData('text/plain',e.target.id);
});

ship.addEventListener("mousedown", (e)=>{
    shipIndex = e.target.dataset.index    
})

main.addEventListener("dragenter",dragEnter)
main.addEventListener("dragover",dragOver)
main.addEventListener('dragleave',dragLeave)
main.addEventListener('drop',(e)=>{
    position = drop(e,shipIndex)
    console.log("position id:",position)
})

cells.forEach(cell=>{
    cell.addEventListener("click",(e)=>{
        if(e.target.parentNode.classList.contains("ship")){
            console.log('cell clicked:',e.target.parentNode.parentNode.dataset.ypos)
            console.log('index of ship',e.target.dataset.index)
        }else{
            console.log(e.target.dataset.ypos)
        }
    })
})

//  Object instanciating 
const cruiser = Ship(2);
const carrier = Ship(4);

const playerBoard = Gameboard();
playerBoard.receiveAttack()
// playerBoard.placeShip(0,1, cruiser)