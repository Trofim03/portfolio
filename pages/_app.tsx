import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MainLayout } from '../components/MainLayout'

import Head from 'next/head'

import { motion } from 'framer-motion'

import '../i18n/i18n';
import { useTranslation } from 'react-i18next';

function MyApp({ Component, pageProps, router }: AppProps) {
	const {
		i18n: { language },
	} = useTranslation();

	const variants = {
		pageInitial: {
			opacity: 0
		},
		pageAnimate: {
			opacity: 1
		},
	}

	return (
		<>
		<Head>
        <title>TI</title>
        
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
    </Head>
		<MainLayout>
			<motion.div key={router.route + language} initial="pageInitial" animate="pageAnimate" variants={variants}>
				<Component {...pageProps} />
			</motion.div>
		</MainLayout>
		</>
	)
}

export default MyApp
