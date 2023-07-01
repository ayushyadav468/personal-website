import Head from 'next/head';

import Footer from '../components/Footer/Footer';
import Contact from '../components/Home/Contact';
import ContactBanner from '../components/Home/ContactBanner';
import Hero from '../components/Home/Hero';
import Projects from '../components/Home/Projects';
import Skills from '../components/Home/Skills';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Ayush Yadav | Full Stack Web Developer</title>
				<meta
					name='description'
					content="I'm a developer who builds creative digital experiences"
				/>
				<meta
					name='keywords'
					content='Web developer, frontend, backend, full-stack, designer'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			</Head>

			<main>
				<Navbar />
				<Hero />
				<Skills />
				<Projects />
				<ContactBanner />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
