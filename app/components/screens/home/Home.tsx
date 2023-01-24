import Meta from 'providers/meta/Meta'
import { FC } from 'react'

import { IHome } from './home.interface'
import styles from './home.module.scss'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Portfolio"
			description="Welcome to my personal developer website!"
		></Meta>
	)
}

export default Home
