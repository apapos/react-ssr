import {RouteObject} from 'react-router-dom'
import Home from '@client/component/home'
import About from '@client/component/about'

const route:RouteObject[]=[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/about',
        element:<About></About>
    }
]
export default route