import { CamelNotationPipe } from './camel-notation.pipe';

describe('CamelNotationPipe', () => {
  it('create an instance', () => {
    const pipe = new CamelNotationPipe();
    expect(pipe).toBeTruthy();
  });
});
