import Head from 'next/head';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import Companies from '../components/Companies';
import Features from '../components/Features';

export default function Home() {
	return (
		<div>
			<Head>
				<title>AppLab</title>
				<meta name='description' content='AppLab' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Jumbotron />
			<Companies />
			<Features />
		</div>
	);
}
