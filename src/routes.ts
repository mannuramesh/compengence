import Home from './pages/+Home.svelte';
import Post from './routes/post/[id].svelte';

const routes = {
    '/': Home,
    '/post/[id]': Post,
};

export default routes;


