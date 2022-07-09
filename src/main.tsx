import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from './styles/dark';
import { App } from './App';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<NextUIProvider theme={darkTheme}>
			<App />
		</NextUIProvider>
	</BrowserRouter>
);
