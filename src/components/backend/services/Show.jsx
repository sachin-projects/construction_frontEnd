import React, { useEffect, useState } from 'react'
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/SideBar';
import { apiUrl, token } from '../../common/http';
import { Link } from 'react-router-dom'

const Show = () => {

    const [services, setServices] = useState([]);
    const fetchServices = async () => {
        const res = await fetch(apiUrl + 'services', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            }
        });

        const result = await res.json();
        setServices(result.data);
        console.log(result);
    }

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            {/* <Sidebar /> */}
                            <Sidebar />

                        </div>
                        <div className='col-md-9'>
                            {/* Dashboard */}
                            <div className='card shadow border-0'>
                                <div className='card-body p-4'>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='h5'>Services</h4>
                                        <Link className='btn-primary small' to="/admin/services/create">Create</Link>
                                    </div>
                                    <hr />
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Slug</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                services && services.map((item) => {
                                                    return (
                                                        <tr key={item.id} >
                                                            <td>{item.id}</td>
                                                            <td>{item.title}</td>
                                                            <td>{item.slug}</td>
                                                            <td>{item.status == 1 ? 'Active' : 'Block'}</td>
                                                            <td>
                                                                <Link to={`/admin/service/edit/${item.id}`} className='btn-primary small'>Edit</Link>
                                                                <Link href="#" className='btn-secondary small ms-2'>Delete</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />


        </>
    )
}

export default Show;
