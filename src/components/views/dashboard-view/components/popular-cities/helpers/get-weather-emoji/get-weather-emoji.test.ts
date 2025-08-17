import { getWeatherEmoji } from './get-weather-emoji';

describe('getWeatherEmoji', () => {
  it('should return correct emoji for clear weather codes', () => {
    expect(getWeatherEmoji(0)).toBe('☀️');
    expect(getWeatherEmoji(1)).toBe('🌤️');
    expect(getWeatherEmoji(2)).toBe('⛅');
    expect(getWeatherEmoji(3)).toBe('☁️');
  });

  it('should return correct emoji for fog codes', () => {
    expect(getWeatherEmoji(45)).toBe('🌫️');
    expect(getWeatherEmoji(46)).toBe('🌫️');
    expect(getWeatherEmoji(47)).toBe('🌫️');
    expect(getWeatherEmoji(48)).toBe('🌫️');
  });

  it('should return correct emoji for drizzle codes', () => {
    expect(getWeatherEmoji(51)).toBe('🌦️');
    expect(getWeatherEmoji(53)).toBe('🌦️');
    expect(getWeatherEmoji(55)).toBe('🌦️');
    expect(getWeatherEmoji(56)).toBe('🌦️');
    expect(getWeatherEmoji(57)).toBe('🌦️');
  });

  it('should return correct emoji for rain codes', () => {
    expect(getWeatherEmoji(61)).toBe('🌧️');
    expect(getWeatherEmoji(63)).toBe('🌧️');
    expect(getWeatherEmoji(65)).toBe('🌧️');
    expect(getWeatherEmoji(66)).toBe('🌧️');
    expect(getWeatherEmoji(67)).toBe('🌧️');
  });

  it('should return correct emoji for snowfall codes', () => {
    expect(getWeatherEmoji(71)).toBe('🌨️');
    expect(getWeatherEmoji(73)).toBe('🌨️');
    expect(getWeatherEmoji(75)).toBe('🌨️');
    expect(getWeatherEmoji(77)).toBe('🌨️');
  });

  it('should return correct emoji for shower codes', () => {
    expect(getWeatherEmoji(80)).toBe('🌦️');
    expect(getWeatherEmoji(81)).toBe('🌦️');
    expect(getWeatherEmoji(82)).toBe('🌦️');
    expect(getWeatherEmoji(85)).toBe('❄️');
    expect(getWeatherEmoji(86)).toBe('❄️');
  });

  it('should return correct emoji for thunderstorm codes', () => {
    expect(getWeatherEmoji(95)).toBe('⛈️');
    expect(getWeatherEmoji(96)).toBe('⛈️');
    expect(getWeatherEmoji(97)).toBe('⛈️');
    expect(getWeatherEmoji(99)).toBe('⛈️');
  });

  it('should return question mark emoji for invalid codes', () => {
    expect(getWeatherEmoji(-1)).toBe('❓');
    expect(getWeatherEmoji(4)).toBe('❓');
    expect(getWeatherEmoji(100)).toBe('❓');
    expect(getWeatherEmoji(999)).toBe('❓');
  });
});
