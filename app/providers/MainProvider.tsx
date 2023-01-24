import { FC, PropsWithChildren } from 'react'

import Layout from '@/components/layout/Layout'

import HeadProvider from './head-provider/HeadProvider'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<HeadProvider>
			<Layout>{children}</Layout>
		</HeadProvider>
	)
}

export default MainProvider
