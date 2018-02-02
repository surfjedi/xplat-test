
describe('git stuff', () => {
  test('should have GITTAG.',()=>{
    expect(process.env.GITTAG).toBe('tag1')
  })
  test('should have BRANCH.',()=>{
    expect(process.env.STUFF2).toBe('stuff2')
  })
  test('should have a git HASH. NOT SPECIFIC',()=>{
    expect(typeof process.env.HASH).toBe('string')
    expect(process.env.HASH.length).toBe(40)
  })
  test('should have exact HASH. this may change if you help with a PR',()=>{
    expect(process.env.HASH).toBe('0e3d4e083e8967094af2b930af996472c8447da4')
  })
});
