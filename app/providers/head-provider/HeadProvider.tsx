import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Favicons from './Favicons'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>

				<Favicons />

				<meta name="theme-color" content={'#722ed1'} />
				<meta name="msapplication-navbutton-color" content={'#722ed1'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#722ed1'}
				/>
				<meta name="theme-color" content={'#722ed1'} />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
