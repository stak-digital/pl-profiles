import { GENDERS, wilksConstants } from '../constants';

interface ILifts {
	deadlift: number;
	bench: number;
	squat: number;
}

export function calculateWilksCoefficient(
	bodyWeight: number,
	{
		a,
		b,
		c,
		d,
		e,
		f
	}: { a: number; b: number; c: number; d: number; e: number; f: number }
) {
	return (
		500 /
		(a +
			b * bodyWeight +
			c * bodyWeight ** 2 +
			d * bodyWeight ** 3 +
			e * bodyWeight ** 4 +
			f * bodyWeight ** 5)
	);
}

/**
 * Total weight lifted * 500 / (a + b * Body Weight^2 + c * Body Weight^3 + d * Body Weight^4 + e * Body Weight^5 + f * Body Weight^6)
 */
export function calculateWilks(
	bodyWeight: number,
	lifts: ILifts,
	gender: GENDERS = GENDERS.MALE
): number {
	const total = getTotalFromLifts(lifts);
	const wilksCoefficient = calculateWilksCoefficient(
		bodyWeight,
		wilksConstants[gender]
	);

	return +(total * wilksCoefficient).toFixed(1);
}

export function getTotalFromLifts(lifts: ILifts): number {
	return Object.values(lifts).reduce(sum, 0);
}

export function sum(a: number, b: number): number {
	return a + b;
}
