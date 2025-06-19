import React, { useState, useEffect } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero';
import ServiceImg from '../../assets/images/construction1.jpg';
import { apiUrl, fileUrl } from '../common/http';

const Services = () => {

    let [services, setServices] = useState([]);

    const fetchServices = async () => {
        const res = await fetch(apiUrl + 'get-services', {
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
        <>
            <Header />
            <Hero data={{
                preheading: 'Quality. Integrity. Value.',
                heading: 'Services',
                text: 'We excel at transforming visions into reality<br />through outstanding craftsmanship and precise.'
            }} />

            <section className='section-3 py-5'>
                <div className="container py-5">
                    <div className='section-header text-center'>
                        <span>Our Services</span>
                        <h2>Our Constructon Services</h2>
                        <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                    </div>
                    <div className='row pt-4'>

                        {
                            services && services.map(services => {
                                return (
                                    <div key={services.id} className='col-md-4 col-lg-4' >
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
            <Footer />
        </>
    )
}

export default Services
