const sum = require('./sum');

it("when a & b is number", () =>{
    const result = sum(1, 2);
    expect(result).toBe(3);
});