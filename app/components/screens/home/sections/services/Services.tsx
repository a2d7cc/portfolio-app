import { motion } from 'framer-motion'
import { FC } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

import Button from '@/components/ui/button/Button'

import { fadeIn } from '@/utils/animate/variants'

const Services: FC = () => {
	return (
		<section id="services" className="section">
			<div className="container mx-auto">
				<div className='flex flex-col lg:flex-row'>
					{/* text & image*/}
					<div
						className="
					flex-1 
					lg:bg-[url('../../assets/images/services.png')]
					lg:bg-bottom
					bg-no-repeat
					mix-blend-lighten
					mb-12
					lg:mb-0
					"
					>
						<h2 className="h2 text-accent mb-6">What i do.</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							I'm a freelancer Front-end Developer with over 5 years of
							experience.
						</h3>
						<Button className="btn btn-sm ">See my work</Button>
					</div>
					{/* services */}
					<div>services</div>
				</div>
			</div>
		</section>
	)
}

export default Services
