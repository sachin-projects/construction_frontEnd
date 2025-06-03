import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ConstructionImg from '../../assets/images/construction2.jpg';

const Projects = () => {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <Hero data={{
                    preheading: 'Quality. Integrity. Value.',
                    heading: 'Our Projects',
                    text: 'We excel at transforming visions into reality<br />through outstanding craftsmanship and precise.'
                }} />

                <section className='section-3 py-5'>
                    <div className="container py-5">
                        <div className='section-header text-center'>
                            <span>Our Projects</span>
                            <h2>Discover our diverse range of projects</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.

                            </p>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-4 col-lg-4'>
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
                                        <a href='#' className='btn-primary small'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
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
                                        <a href='#' className='btn-primary small'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
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
                                        <a href='#' className='btn-primary small'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
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
                                        <a href='#' className='btn-primary small'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
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
                                        <a href='#' className='btn-primary small'>Read More...</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
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
                                        <a href='#' className='btn-primary small'>Read More...</a>
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

export default Projects
