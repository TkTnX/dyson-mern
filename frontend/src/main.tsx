import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './index.css'
import { CategoryPage, Homepage, ProductPage } from './pages'
import { Contact, Footer, Header } from './widgets'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route Component={Homepage} path='/' />
						<Route
							Component={ProductPage}
							path='/products/:productId'
						/>
						<Route
							Component={CategoryPage}
							path='/categories/:slug'
						/>
					</Routes>
				</main>
				<Contact />
				<Footer />
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>
)
