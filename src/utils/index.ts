interface ILifts {
	deadlift: number;
	bench: number;
	squat: number;
}

export enum GENDERS {
	MALE,
	FEMALE
}

export const wilksConstants = {
	[GENDERS.MALE]: {
		a: -216.0475144,
		b: 16.2606339,
		c: -0.002388645,
		d: -0.00113732,
		e: 7.01863e-6,
		f: -1.291e-8
	},
	[GENDERS.FEMALE]: {
		a: 594.31747775582,
		b: -27.23842536447,
		c: 0.82112226871,
		d: -0.00930733913,
		e: 4.731582e-5,
		f: -9.054e-8
	}
};

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

function getTotalFromLifts(lifts: ILifts): number {
	return Object.values(lifts).reduce(sum, 0);
}

function sum(a: number, b: number): number {
	return a + b;
}
