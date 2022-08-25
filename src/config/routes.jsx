//importamos pages
import {AuthPage, ProfilePage} from '../pages'//import v2
const routes = (props) =>{
//<Route path="/" element={componente}/>

return [
    {
        path:'/',//Homepage
        element:<h1>Este el es Home</h1>
    },
    {
        path: '/login',
        element: <AuthPage {...props}/>
    },
    {
        path:"/signup",
        element: <AuthPage {...props}/>
    },
    {
        path: '/profile',
        element:<ProfilePage {...props}/>
    }
]
}

export default routes;