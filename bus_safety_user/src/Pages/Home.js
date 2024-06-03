import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Home() {
    return (
        <>
            <Header />
            {/* Carousel Start */}
            <div className="container-fluid px-0">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" aria-current="true" aria-label="First slide" />
                        <li data-bs-target="#carouselId" data-bs-slide-to={1} aria-label="Second slide" />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="img/carousel-1.jpg" className="img-fluid" alt="First slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animated fadeInUp">Best BUS SAFETY DEVICE</h6>
                                    <h1 className="text-white display-1 mb-4 animated fadeInRight">Saftey On The Bus  <br />"A Priority For Us"</h1><br />
                                    <p className="mb-4 text-white fs-5 animated fadeInDown" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/carousel-2.jpg" className="img-fluid" alt="Second slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-white h4 animated fadeInUp">Best BUS SAFETY DEVICE</h6>
                                    <h1 className="text-white display-1 mb-4 animated fadeInLeft">The Key To Saftey Is In Our Hand</h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>
            {/* Carousel End */}
            {/* About Start */}
            <div className="container-fluid py-5 my-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="h-100 position-relative">
                                <img src="img/sensor.png" className="img-fluid w-75 rounded" alt='' style={{ marginBottom: '25%' }} />
                                <div className="position-absolute w-75" style={{ top: '25%', left: '25%' }}>
                                    <img src="img/bus.jpg" className="img-fluid w-100 rounded" alt='' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                            <h5 className="text-primary">About Us</h5>
                            <h1 className="mb-4">About Bus Safety System Device</h1>
                            <p>The Iot-Based Bus Safety System  Aims To Enhance The Safety And Security Of Passengers And Drivers In Public Buses By Implementing A Comprehensive Iot Solution. This System Will Monitor Various Aspects Of Bus Operations In Real-Time, Provide Critical Information To Passengers And Authorities, And Improve Overall Safety And Efficiency.
                                Emergency Alerts: Enable Emergency Alert Buttons And Sensors To Notify Authorities And Passengers In Case Of Accidents Or Emergencies.</p>
                            <a href className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Services Start */}
            <div className="container-fluid services py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: 600 }}>
                        <h5 className="text-primary">Our Services</h5>
                        <h1>Sensors Used In Our Product</h1>
                    </div>
                    <div className="row g-5 services-inner">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-fire fa-7x mb-4 text-primary" />
                                        <h4 className="mb-3">FLAME SENSOR</h4>
                                        <p className="mb-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-solid fa-wine-bottle fa-7x mb-4 text-primary" />
                                        <h4 className="mb-3">ALCOHOL SENSOR</h4>
                                        <p className="mb-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-solid fa-smog fa-7x mb-4 text-primary" />
                                        <h4 className="mb-3">SMOKE SENOSR</h4>
                                        <p className="mb-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-solid fa-users fa-7x mb-4 text-primary" />
                                        <h4 className="mb-3">IR SENOSR</h4>
                                        <p className="mb-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}

            <Footer />

        </>
    )
}

export default Home