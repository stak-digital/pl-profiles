import React from 'react';
import styled from 'styled-components';
import { Card } from './App.style';
import { gutterWidth } from '../../constants/css';

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
						<dd>115kg</dd>
						<dt>Height</dt>
						<dd>186cm</dd>
					</dl>
				</Card>
				<Card>
					<h2>Wilks</h2>
					<p>340</p>
				</Card>
				<Card>
					<h2>PL Total</h2>
					<p>400kg</p>
				</Card>
			</Layout>
		);
	}
}
