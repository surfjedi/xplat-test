let index = require('../index');
describe('index', () => {
  test('should have 1 from .env file, if 2 its from .env.',()=>{
    let thing = index.usevars()
    expect(thing).toBe('1')
  })
});
