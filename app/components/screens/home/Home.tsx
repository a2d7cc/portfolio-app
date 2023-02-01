import Meta from 'providers/meta/Meta'
import { FC } from 'react'

import Banner from '@/components/screens/home/sections/banner/Banner'
import Contact from '@/components/screens/home/sections/contact/Contact'
import Header from '@/components/screens/home/sections/header/Header'
import Nav from '@/components/ui/nav/Nav'

import siteBg from '@/assets/images/site-bg.jpg'

import { IHome } from './home.interface'
import styles from './home.module.scss'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Work from './sections/work/Work'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Portfolio"
			description="Welcome to my personal developer website!"
		>
			<div className="bg-[url('../../assets/images/site-bg.jpg')] bg-no-repeat bg-cover overflow-hidden">
				<Header />
				<Banner />
				<Nav />
				<About />
				<Services />
				<Work />
				<Contact />
				<div className="h-[4000px]"></div>
			</div>
		</Meta>
	)
}

export default Home
