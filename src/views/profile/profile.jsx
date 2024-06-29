import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../../services/api';
//get token from cookies
const token = Cookies.get('token');


const Profile = () => {
    //useNavigate

    //define state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    //method fetchDetailUser
    const fetchDetailUser = async () => {
        
        //fetch data
        api.defaults.headers.common['Authorization'] = token;
        await api.get(`/api/profile/`)
            .then(response => {
                
                //assign to state
                setName(response.data.data.name);
                setEmail(response.data.data.email);
            })
    }

    //hook useEffect
    useEffect(() => {
        
        //call method "fetchDetailUser"
        fetchDetailUser();

    }, []);

    return (
        <section className="vh-90">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-4">
                        <div className="card" style={{ borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mt-3 mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                        className="rounded-circle img-fluid"
                                        style={{ width: '100px' }}
                                        alt="Avatar"
                                    />
                                </div>
                                <h4 className="mb-2">{name}</h4>
                                <p className="text-muted mb-4">
                                    {email}
                          
                                </p>
                                <div className="mb-4 pb-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-floating"
                                    >
                                        <i className="fab fa-facebook-f fa-lg"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-floating"
                                    >
                                        <i className="fab fa-twitter fa-lg"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-floating"
                                    >
                                        <i className="fab fa-skype fa-lg"></i>
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-rounded btn-lg"
                                >
                                    Message now
                                </button>
                                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                    <div>
                                        <p className="mb-2 h5">8471</p>
                                        <p className="text-muted mb-0">Wallets Balance</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-2 h5">8512</p>
                                        <p className="text-muted mb-0">Income amounts</p>
                                    </div>
                                    <div>
                                        <p className="mb-2 h5">4751</p>
                                        <p className="text-muted mb-0">Total Transactions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
