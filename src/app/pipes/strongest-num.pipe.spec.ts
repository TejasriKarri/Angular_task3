import { StrongestNumPipe } from './strongest-num.pipe';

describe('StrongestNumPipe', () => {
  it('create an instance', () => {
    const pipe = new StrongestNumPipe();
    expect(pipe).toBeTruthy();
  });
  it('should display weak if 5 value is passed', () => {
    const pipe = new StrongestNumPipe();
    expect(pipe.transform(5)).toEqual('5(Weak)');
  });
  it('should display strong if 10 value is passed', () => {
    const pipe = new StrongestNumPipe();
    expect(pipe.transform(10)).toEqual('10(Strong)');
  });
});
