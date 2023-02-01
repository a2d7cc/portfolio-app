import { motion } from 'framer-motion'
import Meta from 'providers/meta/Meta'
import { FC } from 'react'
import { FaDribbble, FaGithub, FaYoutube } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

import Button from '@/components/ui/button/Button'

import imgLink from '@/assets/images/avatar.svg'

import { fadeIn } from '@/utils/animate/variants'

const Banner: FC = () => {
	return (
		<section
			id="home"
			className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
		>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* text */}
					<div className="flex-1 text-center font-scondary lg:text-left">
						<h1 className="text-[35px] font-bold leading-[0.8] lg:text-[85px]">
							ALEX <span>CHUKRII</span>
						</h1>
						<div className="mb-6 text-[26px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]">
							<span className="text-white mr-4">I am a </span>
							<TypeAnimation
								sequence={['Developer', 2000, 'Designer', 2000]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</div>
						<p className="mb-8 text-[12px] lg:text-[24px] max-w-lg mx-auto lg:mx-0">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							corporis voluptate saepe omnis totam, cumque architecto adipisci.
						</p>
						<div className="flex  max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
							<Button className="btn btn-lg">Contact me</Button>
							<a href="#" className="text-gradient btn-link">
								My portfolio
							</a>
						</div>
						{/* socials */}
						<div
							className="flex text-[20px] gap-x-6 max-w-max mx-auto
					lg:mx-0"
						>
							<a href="#">
								<FaYoutube />
							</a>
							<a href="#">
								<FaGithub />
							</a>
							<a href="#">
								<FaDribbble />
							</a>
						</div>
					</div>

					{/* image */}
					<div className="hidden lg:flex flex-1 max-w-[220px] lg:max-w-[380px]">
						<img src={imgLink.src} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
