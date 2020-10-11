import Home from '../Pages/Home'
import Register from '../Pages/Register'
import About from '../Pages/About'
export const routes=[
    {path: '/', name: 'Home', Component: Home},
    {path: '/about', name: 'About', Component: About},
    {path: '/register', name: 'Register', Component: Register},
]
