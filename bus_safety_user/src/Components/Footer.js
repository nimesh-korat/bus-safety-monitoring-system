import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
                <div className="container pt-5 pb-4">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
                            </Link>
                            <p className="mt-4 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                            <div className="d-flex hightech-link">
                                <Link to='/#' className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary" /></Link>
                                <Link to='/#' className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary" /></Link>
                                <Link to='/#' className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary" /></Link>
                                <Link to='/#' className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Link to="/#" className="h3 text-secondary" style={{ textDecoration: 'none' }}>Short Link</Link>
                            <div className="mt-4 d-flex flex-column short-link">
                                <Link to='/about' className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />About us</Link>
                                <Link to='/contact' className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Contact us</Link>
                                <Link to='/services' className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Our Services</Link>
                                <Link to='/projects' className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Our Projects</Link>
                                <Link to='/blog' className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2" />Latest Blog</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Link to="/#" className="h3 text-secondary" style={{ textDecoration: 'none' }}>Contact Us</Link>
                            <div className="text-white mt-4 d-flex flex-column contact-link">
                                <Link to="/#" className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2" /> 123 Street, New York, USA</Link>
                                <Link to="/#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2" /> +123 456 7890</Link>
                                <Link to="/#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2" /> info@exmple.con</Link>
                            </div>
                        </div>
                    </div>
                    <hr className="text-light mt-5 mb-4" />
                    {/* <div className="row">
                        <div className="col-md-6 text-center text-md-start">
                            <span className="text-light"><Link to="/#" className="text-secondary"><i className="fas fa-copyright text-secondary me-2" />Your Site Name</Link>, All right reserved.</span>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            
                            <span className="text-light">Designed By<Link to="https://htmlcodex.com" className="text-secondary">HTML Codex</Link> Distributed By <Link to="https://themewagon.com">ThemeWagon</Link></span>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* Footer End */}

        </>
    )
}

export default Footer