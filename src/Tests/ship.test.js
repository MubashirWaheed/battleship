import Ship from '../Factories/ship'

test("ship is hit when 'hit' funtion is called",()=>{
  const ship = Ship(2);
  ship.hit(1);
  expect(ship.shipArray[1]).toBe("hit")
})

test('ship object should return correct length of ship', () => {
  const ship = Ship(3)
  expect(ship.shipLength).toEqual(3)
})

test('isSunk function should return true if all values in array are "hit"', ()=>{
  const ship = Ship(2);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true)
})

test("ship array contains empty values",()=>{
  const ship = Ship(3);
  expect(ship.shipArray).toEqual(["","",""])
})
