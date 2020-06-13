import { useRouter } from 'next/router';
import App from '../../components/App';

const Post = () => {
	const router = useRouter();
	const { pid } = router.query;

	return <App />;
};

export default Post;
