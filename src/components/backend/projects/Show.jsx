import React from 'react'
import Header from '../../common/Header';
import Sidebar from '../../common/SideBar';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiUrl, token } from '../../common/http';
import { ToastContainer, toast } from 'react-toastify';

const Show = () => {

    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        const res = await fetch(apiUrl + 'projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            }
        });

        const result = await res.json();
        setProjects(result.data);
        console.log(result);
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    const deleteProjects = async (id) => {
        if (confirm('Are you sure to delete this Project?')) {
            const res = await fetch(apiUrl + 'projects/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                }
            })

            const result = await res.json();
            console.log(result);

            if (result.status == true) {
                const newProjects = projects.filter(projects => projects.id != id);
                setProjects(newProjects);
                toast.success(result.message);

            }
        }
    }

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
                                        <h4 className='h5'>Projects</h4>
                                        <Link className='btn-primary small' to="/admin/projects/create">Create</Link>
                                    </div>
                                    <hr />
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Slug</th>
                                                {/* <th>Short Desc</th> */}
                                                {/* <th>Content</th> */}
                                                <th>Construction Type</th>
                                                <th>Sector</th>
                                                <th>Location</th>
                                                {/* <th>Image</th> */}
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                projects && projects.map((item) => {
                                                    return (
                                                        <tr key={item.id} >
                                                            <td>{item.id}</td>
                                                            <td>{item.title}</td>
                                                            <td>{item.slug}</td>
                                                            {/* <td>{item.short_desc}</td> */}
                                                            {/* {<td>{item.content}</td>} */}
                                                            <td>{item.construction_type}</td>
                                                            <td>{item.sector}</td>
                                                            <td>{item.location}</td>
                                                            {/* <td>{item.image}</td> */}
                                                            <td>{item.status == 1 ? 'Active' : 'Block'}</td>
                                                            <td>
                                                                <Link to={`/admin/service/edit/${item.id}`} className='btn-primary small'>Edit</Link>
                                                                <Link onClick={() => { deleteProjects(item.id) }} className='btn-secondary small ms-2'>Delete</Link>
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

export default Show
