//import Link from react router dom
import { Link, useNavigate } from "react-router-dom";

//import hook react
import React, { useContext } from "react";

// import Cookies from js-cookie
import Cookies from 'js-cookie'

//import context
import { AuthContext } from '../context/AuthContext';

export default function SidebarMenu() {

    // Menggunakan hook `useNavigate` untuk navigasi
    const navigate = useNavigate();

    //destructure context "setIsAuthenticated"
    const { setIsAuthenticated } = useContext(AuthContext);

    // method to handle logout
    const logout = () => {

        //remove token and user on cookies
        Cookies.remove('token');
        Cookies.remove('user');

        //assign false to state "isAuthenticated"
        setIsAuthenticated(false);

        // redirect to login
        navigate("/login", { replace: true });
    }

    return (
        <div className="card border-0 rounded shadow-sm bg-dark">
            <div className="card-header text-white">
                MAIN MENU
            </div>
            <div className="card-body bg-dark">
                <div className="list-group">
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark  text-white">Dashboard</Link>

                    <Link to="/admin/users" className="list-group-item list-group-item-action bg-dark text-white">Users</Link>
                    <a onClick={logout} className="list-group-item list-group-item-action bg-dark text-white" style={{ cursor: 'pointer' }}>Logout</a>
                </div>
            </div>
        </div>
    )
}