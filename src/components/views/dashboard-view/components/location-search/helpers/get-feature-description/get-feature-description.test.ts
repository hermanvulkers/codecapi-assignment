import { getFeatureDescription } from './get-feature-description';

describe('getFeatureDescription', () => {
  it('should return correct description for city codes', () => {
    expect(getFeatureDescription('PPL')).toBe('City');
    expect(getFeatureDescription('PPLA')).toBe('Capital');
    expect(getFeatureDescription('PPLA2')).toBe('Regional Capital');
    expect(getFeatureDescription('PPLC')).toBe('National Capital');
  });

  it('should return correct description for administrative codes', () => {
    expect(getFeatureDescription('ADM1')).toBe('Province/State');
    expect(getFeatureDescription('ADM2')).toBe('County/District');
    expect(getFeatureDescription('ADM3')).toBe('Municipality');
    expect(getFeatureDescription('ADM4')).toBe('Local Area');
  });

  it('should return correct description for geographical features', () => {
    expect(getFeatureDescription('ISL')).toBe('Island');
    expect(getFeatureDescription('MT')).toBe('Mountain');
    expect(getFeatureDescription('LK')).toBe('Lake');
    expect(getFeatureDescription('STM')).toBe('Stream');
  });

  it('should return correct description for infrastructure', () => {
    expect(getFeatureDescription('AIRP')).toBe('Airport');
    expect(getFeatureDescription('RSTN')).toBe('Railway Station');
  });

  it('should return null for unknown codes', () => {
    expect(getFeatureDescription('UNKNOWN')).toBeNull();
    expect(getFeatureDescription('XYZ')).toBeNull();
    expect(getFeatureDescription('123')).toBeNull();
  });

  it('should return null for undefined or empty input', () => {
    expect(getFeatureDescription(undefined)).toBeNull();
    expect(getFeatureDescription('')).toBeNull();
  });

  it('should handle case sensitive codes correctly', () => {
    expect(getFeatureDescription('ppl')).toBeNull();
    expect(getFeatureDescription('Ppl')).toBeNull();
    expect(getFeatureDescription('PPL')).toBe('City');
  });
});
