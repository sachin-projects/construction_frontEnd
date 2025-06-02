import React from 'react';
import Aboutus from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section className='section-1'>
                    <div className='hero d-flex align-items-center'>
                        <div className='container-fluid'>
                            <div className='text-center'>
                                <span>Welcome Amazing Constructions</span>
                                <h1>Crafting dreams with <br />
                                    precision and excellence.</h1>
                                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br />
                                    attention to detail. With years of experience and a dedication to quality.</p>
                                <div className='mt-4'>
                                    <a className='btn-primary'>Contact Now</a>
                                    <a className='btn-secondary ms-2'>View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about us Section */}
                <section className='section-2 py-5'>
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={Aboutus} className='w-100' />
                            </div>
                            <div className='col-md-6'>
                                <span>about us</span>
                                <h1>Crafting structures that last a lifetime</h1>
                                <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.</p>
                                <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>

    )
}

export default Home
