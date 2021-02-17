import Timer from './timer';

test('small timer format', () => {
	const timer = new Timer();
	expect(timer.$format((10 * 60 + 31.1) * 1000)).toBe('10:31');
});

test('large timer format', () => {
	const timer = new Timer();
	expect(timer.$format((100000000000 * 60 + 29.9) * 1000)).toBe('40:29');
});
