import { link } from 'fs'
import { FC } from 'react'
import { Link } from 'react-scroll'

import { bottomMenu } from './menu.data'

const Nav: FC = () => {
	return (
		<nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
			<div className="container mx-auto">
				{/* nav inner */}
				<div
					className="w-full bg-black/20 h-[76px] backdrop-blur-2xl rounded-full 
				max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50"
				>
					{bottomMenu.map((item) => (
						<Link
							to={item.to}
							className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
							activeClass="active"
							smooth={true}
							spy={true}
							offset={0}
						>
							{item.icon}
						</Link>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Nav
