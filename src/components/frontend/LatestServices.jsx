import React, { useState } from 'react';
import { apiUrl, fileUrl } from '../common/http';
import { useEffect } from 'react';
import ServiceImg from '../../assets/images/construction1.jpg';

const LatestServices = () => {

    let [services, setServices] = useState([]);

    const fetchServices = async () => {
        const res = await fetch(apiUrl + 'get-latest-services?limit=4', {
            method: 'GET'
        });
        const result = await res.json();
        //console.log(result); // Log this instead
        setServices(result);
    }

    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <section className='section-3 bg-ligth py-5'>
            <div className="container-fluid py-5">
                <div className='section-header text-center'>
                    <span>Our Services</span>
                    <h2>Our Constructon Services</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>
                <div className='row pt-4'>
                    {
                        services && services.map(services => {
                            return (
                                <div key={services.id} className='col-md-3 col-lg-3' >
                                    <div className='item'>
                                        <div className='service-image'>
                                            <img src={fileUrl + 'uploads/temp/' + services.image_name} className='w-100' />
                                        </div>
                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>{services.title}</h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>{services.short_desc}</p>
                                            </div>
                                            <a href='#' className='btn-primary small'>Read More...</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default LatestServices





