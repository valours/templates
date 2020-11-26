const main = require('./main');
const video = require('./video');

test('simple test', () => {
  expect(main(1, 2)).toBe(3);
});

test('test with spy', () => {
  const spy = jest.spyOn(video, 'play');
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);

  spy.mockRestore();
});