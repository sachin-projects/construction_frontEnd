import React from 'react';
import Aboutus from '../../assets/images/about-us.jpg';
import Header from '../common/Header';

const Home = () => {
    return (
        <>
            <Header />
            <header>
                <div className='container py-3'>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home" className='logo'><span>UrbanEdge </span> Construction</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>About us</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>Projects</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>Contact us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>

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

            <footer>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h3 className='mb-3'>UrbanEdge Constructions</h3>
                            <div className='pe-5'>
                                <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>

                            </div>
                        </div>
                        <div className='col-md-3'>
                            <h3 className='mb-3'>Our Services</h3>
                            <ul>
                                <li><a href="#">Specialty Construction</a></li>
                                <li><a href="#">Specialty Construction</a></li>
                                <li><a href="#">Specialty Construction</a></li>
                                <li><a href="#">Specialty Construction</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h3 className='mb-3'>Quick Links</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h3 className='mb-3'>Contact us</h3>
                            <ul>
                                <li><a href="#">(888-000-0000)</a></li>
                                <li><a href="#">info@example.com</a></li>
                                <li><a href="#">B-18X, Rajaji Puram
                                    Lucknow, Uttar Pradesh, 226017</a></li>
                                <li><a href="#">0522400XXXX</a></li>
                            </ul>
                        </div>
                        <hr />
                        <div className='text-center pt-3'>Copyright © 2024 UrbanEdge Construtions. All Rights Reserved.</div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Home
