
describe('cross env vars', () => {
  test('should have stuff1',()=>{
    expect(process.env.STUFF1).toBe('stuff1')
  })
  test('should have stuff2',()=>{
    expect(process.env.STUFF2).toBe('stuff2')
  })
});
