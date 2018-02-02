
describe('cross env vars', () => {
  test('should have stuff1. Has escaped qoutes',()=>{
    expect(process.env.STUFF1).toBe('stuff1')
  })
  test('should have stuff2. Does not have escaped quotes',()=>{
    expect(process.env.STUFF2).toBe('stuff2')
  })
});
