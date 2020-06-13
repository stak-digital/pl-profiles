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

export const weightClasses = {
	[GENDERS.MALE]: [59, 66, 74, 83, 93, 105, 120],
	[GENDERS.FEMALE]: [47, 52, 57, 63, 72, 84]
};
