import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Luck'
	}
});

export default app;