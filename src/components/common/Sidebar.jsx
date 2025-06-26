import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../backend/context/Auth';

const Sidebar = () => {

    const { logout } = useContext(AuthContext);
    return (
        <div className='card shadow border-0'>
            <div className='card-body p-4 sidebar'>
                <h4>Sidebar</h4>
                <ul>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/services">Services</Link></li>
                    <li><Link to="/admin/projects">Projects</Link></li>
                    <li><Link to="/">Articales</Link></li>
                </ul>
                <button className='btn-primary small' onClick={logout}>Logout</button>
            </div >
        </div >
    )
}

export default Sidebar;
