import * as React from 'react';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';

if (typeof window !== 'undefined') {
	import('../serviceWorker').then((register) => {
		(register as any)();
	});
}

export class MainDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<html lang="en-US" key="lang" />
					<meta charSet="utf-8" key="charset" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
						key="viewport"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="/logo192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="512x512"
						href="/logo512.png"
					/>
					<link
						rel="icon"
						type="image/x-icon"
						sizes="32x32"
						href="/favicon.ico"
					/>
					<link rel="stylesheet" href="/resets.css" />
					<link rel="stylesheet" href="/index.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MainDocument;
