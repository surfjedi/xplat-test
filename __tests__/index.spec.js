let index = require('../index');
console.log(index);
describe('index', () => {
  test('should have 1',()=>{
    let thing = index.usevars()
    expect(thing).toBe('1')
  })
});
