import { calculateWilks, GENDERS } from './index';
import { bodyWeight, lifts } from '../data';

describe('calculateWilks', () => {
	it('should return the correct values from totals for male', () => {
		expect(calculateWilks(bodyWeight, lifts, GENDERS.MALE)).toBe(339.4);
	});

	it('should return the correct values from totals for female', () => {
		expect(calculateWilks(bodyWeight, lifts, GENDERS.FEMALE)).toBe(473);
	});
});
