let index = require('../index');
describe('index', () => {
  test('should have 1',()=>{
    let thing = index.usevars()
    expect(thing).toBe('1')
  })
});
