import React from 'react';
import styled from 'styled-components';
import { Card } from './App.style';
import { gutterWidth } from '../../constants/css';
import { bodyWeight, lifts } from '../../data';
import { calculateWilks, getTotalFromLifts } from '../../utils';

const Layout = styled.div`
	padding: ${gutterWidth};
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: ${gutterWidth};
`;

export default class App extends React.Component {
	render() {
		return (
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
		);
	}
}
