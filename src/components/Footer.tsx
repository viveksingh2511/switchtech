import React from "react";
import "../css/footer.css"


const Footer = () => {
    return (
        <footer className="footer bg-light border-top">
            <div className="container py-5">
                <div className="row g-4">

                    {/* Brand */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <div className="logo-box me-2">S</div>
                            <h5 className="fw-bold mb-0">Switch Tech</h5>
                        </div>

                        <p className="small">
                            Transforming careers through hands-on Data Engineering education.
                            Master Python, SQL, PySpark, Airflow, Jenkins & Cloud platforms with
                            placement support until you're hired.
                        </p>

                        <div className="d-flex gap-2">
                            <a href="#" className="social-btn"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="social-btn"><i className="bi bi-github"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-semibold mb-3">Quick Links</h6>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#course">Course Details</a></li>
                            <li><a href="#instructor">Instructor</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Program Info */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-semibold mb-3">Program Info</h6>

                        <p className="small mb-1"><strong>Duration:</strong> 16 Weeks</p>
                        <p className="small mb-1"><strong>Next Batch:</strong> Aug 15, 2025</p>
                        <p className="small mb-1"><strong>Location:</strong> Pune</p>
                        <p className="small mb-2"><strong>Technologies:</strong> 8+</p>

                        <div className="d-flex flex-wrap gap-1">
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">SQL</span>
                            <span className="tech-badge">PySpark</span>
                            <span className="tech-badge">Airflow</span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-semibold mb-3">Contact</h6>

                        <p className="small mb-2">
                            <i className="bi bi-telephone text-primary me-2"></i> +91 9146820420
                        </p>

                        <p className="small mb-2">
                            <i className="bi bi-envelope text-primary me-2"></i> switchtech55@gmail.com
                        </p>

                        <p className="small">
                            <i className="bi bi-geo-alt text-primary me-2"></i>
                            Hinjewadi, Pune, India
                        </p>

                        <button className="btn btn-danger btn-sm w-100 mt-3">
                            Enroll Now <i className="bi bi-box-arrow-up-right ms-1"></i>
                        </button>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-top pt-4 mt-4 d-flex flex-column flex-md-row justify-content-between small">
                    <span>© 2025 Switch Tech. All rights reserved.</span>
                    <div className="d-flex gap-3 mt-2 mt-md-0">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Refund</a>
                    </div>
                </div>
            </div>
        </footer>

    );
}
export default Footer;