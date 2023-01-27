import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs'

export const bottomMenu = [
	{
		icon: <BiHomeAlt />,
		to: 'home',
	},
	{
		icon: <BiUser />,
		to: 'about',
	},
	{
		icon: <BsClipboardData />,
		to: 'services',
	},
	{
		icon: <BsBriefcase />,
		to: 'work',
	},
	{
		icon: <BsChatSquareText />,
		to: 'contact',
	},
]
