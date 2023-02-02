import Meta from 'providers/meta/Meta'
import { FC } from 'react'

import logo from '@/assets/images/logo.svg'

import Button from '../../../../ui/button/Button'

const Header: FC = () => {
	return (
		<div id="home" className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* Logo */}
					{/* <a href="#">
						<img src={logo.src}></img>
					</a> */}
					<a href="#" className="text-gradient btn-link text-3xl">
						Alex Chukrii
					</a>
					{/* Button */}
					<Button className="btn btn-sm">Work with me</Button>
				</div>
			</div>
		</div>
	)
}

export default Header
