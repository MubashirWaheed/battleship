import Ship from '../Factories/ship'
test('returns length of ship', () => {
  const ship1 = Ship(3)
  const value = ship1.shipLength;
  expect(value).toEqual(3)
})

test("marks positionas hit on the grid", ()=>{
  const ship1 = Ship(3)
  
})