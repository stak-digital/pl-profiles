import React from 'react';
import styled from 'styled-components';
import { Card } from './App.style';
import { FaInstagram, FaYoutubeSquare } from 'react-icons/fa';
import { gutterWidth } from '../../constants/css';
import { bodyWeight, lifts } from '../../data';
import { calculateWilks, getTotalFromLifts } from '../../utils';

const Layout = styled.div`
	padding: 0 ${gutterWidth} ${gutterWidth};
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: ${gutterWidth};
	margin-top: -${gutterWidth};
`;

const StyledHeader = styled.header`
	padding: 0 ${gutterWidth};
	background-color: #673ab7;
	color: white;
	height: 130px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Links = styled.div`
	a {
		color: white;
		margin-right: 15px;
		font-size: 2rem;

		&:last-of-type {
			margin: 0;
		}
	}
`;

type Services = 'instagram' | 'youtube';

interface ILink {
	serviceName: Services;
	href: string;
}

const links: ILink[] = [
	{
		serviceName: 'instagram',
		href: '#'
	},
	{
		serviceName: 'youtube',
		href: '#'
	}
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

export default class App extends React.Component {
	render() {
		return (
			<div>
				<StyledHeader>
					<h1>Luke Boyle's powerlifting profile</h1>
					<Links>
						{links.map(link => {
							return (
								<a href={link.href} rel="noreferrer noopener">
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
					<Card style={{ gridColumn: 'span 2' }}>
						<dl>
							<dt>Bench</dt>
							<dd>145kg</dd>
							<dt>Squat</dt>
							<dd>220kg</dd>
							<dt>Deadlift</dt>
							<dd>235kg</dd>
						</dl>
					</Card>
					<Card></Card>
				</Layout>
			</div>
		);
	}
}
