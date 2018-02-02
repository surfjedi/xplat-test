
describe('pockage.json stuff', () => {
  test('should have VERSION.',()=>{
    expect(process.env.VERSION).toBe('1.0.1')
  })
  test('should have build.',()=>{
    expect(process.env.BUILD).toBe('222')
  })
});
