import { motion } from 'framer-motion'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import workImage1 from '@/assets/images/portfolio-img1.png'
import workImage2 from '@/assets/images/portfolio-img2.png'
import workImage3 from '@/assets/images/portfolio-img3.png'

import { fadeIn } from '@/utils/animate/variants'

import { projects } from './projects.data'

const Work: FC = () => {
	return (
		<section id="work" className="section">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Work Describe */}
					<div className="flex flex-col lg:flex-row gap-x-10">
						<div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
							{/* text */}
							<div>
								<h2 className="h2 leading-tight text-accent">
									My Latest <br />
									Work.
								</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempore totam dolores nemo debitis qui tempora. Maxime,
									perspiciatis architecto. Nihil nesciunt quasi doloribus
									excepturi eius consequatur ab quis, doloremque modi pariatur!
								</p>
								<Button className="btn btn-sm mt-3">View all projects</Button>
							</div>
						</div>
					</div>

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
				</div>
			</div>
		</section>
	)
}

export default Work
