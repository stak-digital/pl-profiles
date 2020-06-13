import * as React from 'react';
import { FaInstagram, FaYoutubeSquare } from 'react-icons/fa';
import { bodyWeight, lifts } from '../../data';
import { calculateWilks, getTotalFromLifts } from '../../utils';
import { Card, StyledFooter, Layout, Links, StyledHeader } from './style';

type Services = 'instagram' | 'youtube';

interface ILink {
	serviceName: Services;
	href: string;
}

const links: ILink[] = [
	{
		serviceName: 'instagram',
		href: '#',
	},
	{
		serviceName: 'youtube',
		href: '#',
	},
];

function getLogo(serviceName: Services): React.ReactElement | null {
	switch (serviceName) {
		case 'instagram':
			return <FaInstagram />;
		case 'youtube':
			return <FaYoutubeSquare />;
		default:
			return null;
	}
}

const data = [
	{ name: 'Bench', value: lifts.bench },
	{ name: 'Squat', value: lifts.squat },
	{ name: 'Deadlift', value: lifts.deadlift },
];

const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

export const App = () => (
	<div>
		<StyledHeader>
			<h1>Luke Boyle's powerlifting profile</h1>
			<Links>
				{links.map((link) => {
					return (
						<a
							href={link.href}
							rel="noreferrer noopener"
							key={link.href}
						>
							{getLogo(link.serviceName)}
						</a>
					);
				})}
			</Links>
		</StyledHeader>
		<Layout>
			<Card>
				<dl>
					<dt>Weight</dt>
					<dd>{bodyWeight}kg</dd>
					<dt>Height</dt>
					<dd>186cm</dd>
				</dl>
			</Card>
			<Card>
				<h2>Wilks</h2>
				<p>{calculateWilks(bodyWeight, lifts)}</p>
			</Card>
			<Card>
				<h2>PL Total</h2>
				<p>{getTotalFromLifts(lifts)}kg</p>
			</Card>
			<Card style={{ gridColumn: 'span 2', display: 'flex' }}>
				<dl>
					<dt>Bench</dt>
					<dd>{lifts.bench}kg</dd>
					<dt>Squat</dt>
					<dd>{lifts.squat}kg</dd>
					<dt>Deadlift</dt>
					<dd>{lifts.deadlift}kg</dd>
				</dl>
			</Card>
			<Card></Card>
		</Layout>
		<StyledFooter>
			&copy; {new Date().getFullYear()}{' '}
			<a
				href="https://stak.digital"
				target="_blank"
				rel="noreferrer noopener"
			>
				Stak Digital
			</a>
		</StyledFooter>
	</div>
);

export default App;
