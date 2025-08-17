import { getWeatherDescription } from './get-weather-description';

describe('getWeatherDescription', () => {
  it('should return correct description for clear weather codes', () => {
    expect(getWeatherDescription(0)).toBe('Clear sky');
    expect(getWeatherDescription(1)).toBe('Mainly clear');
    expect(getWeatherDescription(2)).toBe('Partly cloudy');
    expect(getWeatherDescription(3)).toBe('Overcast');
  });

  it('should return correct description for fog codes', () => {
    expect(getWeatherDescription(45)).toBe('Fog');
    expect(getWeatherDescription(46)).toBe('Fog');
    expect(getWeatherDescription(47)).toBe('Fog');
    expect(getWeatherDescription(48)).toBe('Fog');
  });

  it('should return correct description for drizzle codes', () => {
    expect(getWeatherDescription(51)).toBe('Drizzle');
    expect(getWeatherDescription(53)).toBe('Drizzle');
    expect(getWeatherDescription(55)).toBe('Drizzle');
    expect(getWeatherDescription(56)).toBe('Drizzle');
    expect(getWeatherDescription(57)).toBe('Drizzle');
  });

  it('should return correct description for rain codes', () => {
    expect(getWeatherDescription(61)).toBe('Rain');
    expect(getWeatherDescription(63)).toBe('Rain');
    expect(getWeatherDescription(65)).toBe('Rain');
    expect(getWeatherDescription(66)).toBe('Rain');
    expect(getWeatherDescription(67)).toBe('Rain');
  });

  it('should return correct description for snowfall codes', () => {
    expect(getWeatherDescription(71)).toBe('Snowfall');
    expect(getWeatherDescription(73)).toBe('Snowfall');
    expect(getWeatherDescription(75)).toBe('Snowfall');
    expect(getWeatherDescription(77)).toBe('Snowfall');
  });

  it('should return correct description for shower codes', () => {
    expect(getWeatherDescription(80)).toBe('Rain showers');
    expect(getWeatherDescription(81)).toBe('Rain showers');
    expect(getWeatherDescription(82)).toBe('Rain showers');
    expect(getWeatherDescription(85)).toBe('Snow showers');
    expect(getWeatherDescription(86)).toBe('Snow showers');
  });

  it('should return correct description for thunderstorm codes', () => {
    expect(getWeatherDescription(95)).toBe('Thunderstorm');
    expect(getWeatherDescription(96)).toBe('Thunderstorm with hail');
    expect(getWeatherDescription(97)).toBe('Thunderstorm with hail');
    expect(getWeatherDescription(99)).toBe('Thunderstorm with hail');
  });

  it('should return Unknown for invalid codes', () => {
    expect(getWeatherDescription(-1)).toBe('Unknown');
    expect(getWeatherDescription(4)).toBe('Unknown');
    expect(getWeatherDescription(100)).toBe('Unknown');
    expect(getWeatherDescription(999)).toBe('Unknown');
  });
});
