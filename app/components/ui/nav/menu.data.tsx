import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs'

export const bottomMenu = [
	{
		icon: <BiHomeAlt />,
		to: 'home',
		offset: 0,
	},
	{
		icon: <BiUser />,
		to: 'about',
		offset: 0,
	},
	{
		icon: <BsClipboardData />,
		to: 'services',
		offset: 0,
	},
	{
		icon: <BsBriefcase />,
		to: 'work',
		offset: 50,
	},
	{
		icon: <BsChatSquareText />,
		to: 'contact',
		offset: 0,
	},
]
