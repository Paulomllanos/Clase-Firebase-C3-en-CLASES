import {Outlet} from 'react-router-dom';
import Navigation from '../../routes/Navigate';

const Layout = () => {
  return (
    <div>
        <Navigation />
        
        <Outlet />

        <h3>Footer</h3>
    </div>
  )
}

export default Layout;