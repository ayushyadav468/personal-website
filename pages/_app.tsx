import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	variable: '--font-poppins',
	subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${poppins.variable} font-serif`}>
			<Component {...pageProps} />
		</main>
	);
}
