import Ship from '../Factories/ship'

test('returns length of ship', () => {
  const ship1 = Ship(3)
  const value = ship1.shipLength;
  expect(value).toEqual(3)
})

test("marks positionas hit on the grid", ()=>{
  const ship1 = Ship(3)
  
})
test('isSunk func should return true if all values in array are "hit"', ()=>{
  const ship1 = Ship(2);
  ship1.hit(0);
  ship1.hit(1);
  expect(ship1.isSunk()).toEqual(true);
})

test('isSunk func should return false if all values in array are not "hit"', ()=>{
  const ship1 = Ship(2);
  ship1.hit(0);
  expect(ship1.isSunk()).toEqual(false);
})