import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/SideBar'
import { Link } from 'react-router-dom'

const Create = () => {
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
                                        <h4 className='h5'>Services/Create</h4>
                                        <Link className='btn-primary small' to="/admin/services">Back</Link>
                                    </div>
                                    <hr />
                                    xxxxx
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

export default Create;
