import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Complaint() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        userName: "",
        subject: "",
        compDetails: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/addComplaints", data);
            if (response.data.success) {
                alert(response.data.message);
                navigate("/");
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <>
            <Header />
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">
                        Complaint Us
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">
                                Complaint
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Fact Start */}
            {/* Fact End */}
            {/* Complaint Start */}
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeIn"
                        data-wow-delay=".3s"
                        style={{ maxWidth: 600 }}
                    >
                        <h5 className="text-primary">Get In Touch</h5>
                        <h1 className="mb-3">Complaint to make bus more secure</h1>
                    </div>
                    <div className="contact-detail position-relative p-5">
                        <div className="row g-5 d-flex align-items-center justify-content-center">
                            <div className="col-lg-6 wow fadeIn  " data-wow-delay=".5s">
                                <form className="p-5 rounded contact-form" onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="userName"
                                            onChange={handleChange}
                                            value={data.userName}
                                            className="form-control border-0 py-3"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="subject"
                                            onChange={handleChange}
                                            value={data.subject}
                                            className="form-control border-0 py-3"
                                            placeholder="Suject"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            className="w-100 form-control border-0 py-3"
                                            name="compDetails"
                                            onChange={handleChange}
                                            value={data.compDetails}
                                            rows={6}
                                            cols={10}
                                            placeholder="Complaint Detail"
                                        />
                                    </div>
                                    <div className="text-start">
                                        <button
                                            className="btn bg-primary text-white py-3 px-5"
                                            type="submit"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Complaint