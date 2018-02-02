let index2 = require('../index2');

describe('index2', () => {
  test('should have 2',()=>{
    let thing = index2.usevars()
    expect(thing).toBe('2')
  })
});
