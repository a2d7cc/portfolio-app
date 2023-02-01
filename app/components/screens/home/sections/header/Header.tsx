import Meta from 'providers/meta/Meta'
import { FC } from 'react'

import logo from '@/assets/images/logo.svg'

import Button from '../../../../ui/button/Button'

const Header: FC = () => {
	return (
		<div className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<a href="#">
						<img src={logo.src}></img>
					</a>
					{/* Button */}
					<Button className="btn btn-sm">Work with me</Button>
				</div>
			</div>
		</div>
	)
}

export default Header
