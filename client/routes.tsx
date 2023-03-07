import { RouteObject } from 'react-router-dom'
import Home from '@client/component/home'
import About from '@client/component/about'
import Person from '@client/component/person'


const route: RouteObject[] = [
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/person',
        element: <Person></Person>
    }
]
export default route