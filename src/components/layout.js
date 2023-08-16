import './layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Navbar from './navbar'

const Layout = () => {
    return (
        <div className='App'> 
            <Sidebar/>
            <Navbar/>
            <div className='page'>
                
                <Outlet/>
               

            </div>
        </div>
    )   
}

export default Layout