'use strict';
const multiBracket = require('../multi');

describe('Brackets test',()=>{
  it('one type bracket',()=>{
    expect(multiBracket('{}')).toBeTruthy();
  });
  it('two type of bracket with word',()=>{
    expect(multiBracket('()[[Extra Characters]]')).toBeTruthy();
  });
  it('three type of bracket with word',()=>{
    expect(multiBracket('{()[[Extra Characters]]}')).toBeTruthy();
  });

  it('one bracket',()=>{
    expect(multiBracket('{')).toBeFalsy();
  });
  it('two type of bracket with word',()=>{
    expect(multiBracket('()[[Extra)() Characters]]')).toBeFalsy();
  });
  it('three type of bracket with word',()=>{
    expect(multiBracket('[({}]')).toBeFalsy();
  });
});
