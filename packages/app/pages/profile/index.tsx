import * as React from 'react';
import { useRouter } from 'next/router';
import App from '../../components/App';

const Post = () => {
	const router = useRouter();
	const { pid } = router.queryString;

	return <App />;
};

export default Post;
