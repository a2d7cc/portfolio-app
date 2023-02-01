import { motion } from 'framer-motion'
import { FC } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '@/utils/animate/variants'

const About: FC = () => {
	return (
		<div id="about" className="section">
			About
		</div>
	)
}

export default About
