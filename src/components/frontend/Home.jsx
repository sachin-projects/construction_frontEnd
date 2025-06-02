import React from 'react';
import Aboutus from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ServiceImg from '../../assets/images/construction1.jpg';
import ConstructionImg from '../../assets/images/construction2.jpg';
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'


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
                {/* Our Services */}
                <section className='section-3 bg-ligth py-5'>
                    <div className="container-fluid py-5">
                        <div className='section-header text-center'>
                            <span>Our Services</span>
                            <h2>Our Constructon Services</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn-primary'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn-primary'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn-primary'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn-primary'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose us */}
                <section className='section-4 py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>Why Choose Us</span>
                            <h2>Discover our wide variety of projects.</h2>
                            <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,<br /> decades of experience, innovation, and flexibility to consistently deliver excellence.

                            </p>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 py-4 p-3'>
                                    <div className='card-icon'>
                                        <img src={Icon1} />

                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>

                                    <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 py-4 p-3'>
                                    <div className='card-icon'>
                                        <img src={Icon2} />

                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>

                                    <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 py-4 p-3'>
                                    <div className='card-icon'>
                                        <img src={Icon3} />

                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>

                                    <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Projects */}
                <section className='section-3 bg-ligth py-5'>
                    <div className="container-fluid py-5">
                        <div className='section-header text-center'>
                            <span>Our Projects</span>
                            <h2>Discover our diverse range of projects</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.

                            </p>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ConstructionImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Projects</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn-primary'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ConstructionImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Projects</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn-primary'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ConstructionImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Projects</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn-primary'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ConstructionImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Projects</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn-primary'>Read More...</a>
                                    </div>
                                </div>
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
