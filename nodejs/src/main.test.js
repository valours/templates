const main = require('./main');
const video = require('./video');

describe('simple test', () => {
  test('add', () => {
    expect(main.add(1, 2)).toBe(3);
  });
})

describe('spy', () => {
  test('spy console', () => {
    // given
    const consoleLog = jest.spyOn(console, 'log')

    // when
    main.console('John')

    //then
    expect(consoleLog).toHaveBeenCalledWith('hello John');
  })

  test('spy module', () => {
    const spy = jest.spyOn(video, 'play');
    const isPlaying = video.play();

    expect(spy).toHaveBeenCalled();
    expect(isPlaying).toBe(true);

    spy.mockRestore();
  });
})