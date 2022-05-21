import Ship from "./Factories/ship";
import Gameboard from "./Factories/gameboard";

const cruiser = Ship(2);
const destroyer = Ship(3)
const carrier = Ship(4);

const playerBoard = Gameboard();
const AI = Gameboard();
playerBoard.placeShip(0,0, cruiser)