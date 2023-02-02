import { motion } from 'framer-motion'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import workImage1 from '@/assets/images/portfolio-img1.png'
import workImage2 from '@/assets/images/portfolio-img2.png'
import workImage3 from '@/assets/images/portfolio-img3.png'
import projectsSvg from '@/assets/images/projects.svg'

import { fadeIn } from '@/utils/animate/variants'

import { projects } from './projects.data'
import { mainProject } from './projects.data'

const Work: FC = () => {
	return (
		<section id="work" className="section">
			<div className="container mx-auto">
				{/* Work Describe with main project */}
				<div className="flex-1 flex flex-col lg:flex-row gap-x-12 gap-y-12 mb-10  lg:mb-10">
					{/* text */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.1 }}
						className="max-w-screen-sm"
					>
						<h2 className="h2 leading-tight text-accent">
							My Latest <br />
							Work.
						</h2>
						<p className="max-w-lg mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
							totam dolores nemo debitis qui tempora. Maxime, perspiciatis
							architecto. Nihil nesciunt quasi doloribus excepturi eius
							consequatur ab quis, doloremque modi pariatur!
						</p>
						<Button className="btn btn-sm">View all projects</Button>
					</motion.div>

					{/* Projects */}
					{mainProject.map((project, index) => {
						return (
							<motion.div
								variants={fadeIn('left', 0.3)}
								initial="hidden"
								whileInView={'show'}
								viewport={{ once: false, amount: 0.02 }}
								className="lg:basis-2/3 shrink group relative overflow-hidden cursor-pointer border-2 border-white/50 rounded-xl"
							>
								{/* overlay */}
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
								{/* img */}
								<img
									className="group-hover:scale-125 transition-all duration-500 lg:max-w-[130%]"
									src={project.imgLink}
									alt="Image of project in section 'Projects'"
								/>
								{/* pretitle */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
									<span className="text-gradient">{project.preTitle}</span>
								</div>
								{/* Title */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
									<span className="text-3xl text-white">{project.title}</span>
								</div>
							</motion.div>
						)
					})}
				</div>

				{/* Projects */}
				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView={'show'}
					viewport={{ once: false, amount: 0.1 }}
					className="flex-1 flex flex-col lg:flex-row gap-4"
				>
					{/* Projects */}
					{projects.map((project, index) => {
						return (
							<div className=" shrink group relative overflow-hidden cursor-pointer border-2 border-white/50 rounded-xl">
								{/* overlay */}
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
								{/* img */}
								<img
									className="group-hover:scale-125 transition-all duration-500"
									src={project.imgLink}
									alt="Image of project in section 'Projects'"
								/>
								{/* pretitle */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
									<span className="text-gradient">{project.preTitle}</span>
								</div>
								{/* Title */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
									<span className="text-3xl text-white">{project.title}</span>
								</div>
							</div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}

export default Work
