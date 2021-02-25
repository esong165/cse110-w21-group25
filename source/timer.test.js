import Timer from './timer';

test('works', () => {
	expect(Timer.$format((10 * 60 + 31.1) * 1000)).toBe('10:31');
});