
describe('pockage.json stuff', () => {
  test('should have GITTAG.',()=>{
    expect(process.env.GITTAG).toBe('1.0.1')
  })
  test('should have build.',()=>{
    expect(process.env.BUILD).toBe('222')
  })
});
