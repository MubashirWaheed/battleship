import Gameboard from "../Factories/gameboard";
import Player from '../Factories/player'
// How do I write test for placeship function
//  what does the placeship is doing? 
    // adding ships in the board. BUt how do I check using matcher the outcome of board
test("add ship at the correct place horizontally",()=>{
    const player = Player("human");
    player.board.placeShip(0,0,1,0);
    // How do I check for the objetc created inside the func and stored in array 
    expect(player.board.board[0][0]).toBeTruthy()
})
// how to write test for function that calls other function 
test.only("tesiing allSunk",()=>{
    const a = Gameboard();
    // I have to pass board array which contains ship object, and that object calls other fctory method 
    a.placeShip(0,0,2,0);
    a.receiveAttack(0,0)
    a.receiveAttack(0,1)
    expect(a.allSunk(a.board)).toBeTruthy()
})

test("checking if receive attack changes the array value",()=>{
    const a = Gameboard();
    a.placeShip(0,0,1,0);
    a.receiveAttack(0,0)
    //  this test will break if I change anything in ship factory 
    // a.board[0][0].ship
    // expect(a.board[0][0].ship.)
})