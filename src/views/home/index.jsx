import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div>
            <div className="p-5 mb-4 bg-dark rounded-3 shadow-sm">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold text-white">FULL STACK JAVASCRIPT DEVELOPER</h1>
                    <p className="col-md-12 fs-4 text-white">Belajar Full Stack JavaScript Developer dengan Express dan React di SantriKoding.com</p>
                    <hr />
                    <Link to="/register" className="btn btn-primary btn-lg me-3">REGISTER</Link>
                    <Link to="/login" className="btn btn-secondary btn-lg">LOGIN</Link>
                </div>
            </div>
        </div>
    );
}
