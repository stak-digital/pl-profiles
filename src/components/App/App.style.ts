import styled from 'styled-components';
import { gutterWidth } from '../../constants/css';

export const Card = styled.div`
	padding: ${gutterWidth};
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
		0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);

	h2 {
		font-size: 1rem;
		margin: 0;
	}

	p {
		font-size: 3.5rem;
		margin: 0;
	}

	dl {
		display: grid;
		text-align: left;
		margin: 0;

		dt {
			font-size: 1rem;
			font-weight: bold;
		}

		dd {
			margin: 0 0 10px;
			font-size: 2.5rem;
			font-weight: normal;
		}
	}
`;
